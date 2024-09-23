import os
import pyperclip

def list_files(startpath, file_extensions, exclude_keywords):
    tree_structure = ""

    def is_valid_file(file, root):
        # Check if file extension is valid and if it doesn't contain excluded keywords
        if any(file.endswith(ext) for ext in file_extensions) and not any(keyword in file or keyword in root for keyword in exclude_keywords):
            # Special handling for the 'utils' folder
            if 'node_modules' in root or '.next' in root:
                return False
            return True
        return False

    def is_valid_folder(path):
        for root, _, files in os.walk(path):
            if any(keyword in root for keyword in exclude_keywords):
                continue
            for file in files:
                if is_valid_file(file, root):
                    return True
        return False

    for root, dirs, files in os.walk(startpath):
        if any(keyword in root for keyword in exclude_keywords):
            dirs[:] = []  # Don't traverse into excluded directories
            continue
        if is_valid_folder(root):
            level = root.replace(startpath, '').count(os.sep)
            indent = ' ' * 4 * level
            tree_structure += f"{indent}{os.path.basename(root)}/\n"
            subindent = ' ' * 4 * (level + 1)
            for file in files:
                if is_valid_file(file, root):
                    tree_structure += f"{subindent}{file}\n"
    return tree_structure

# Define the start path, file extensions to look for, and keywords to exclude
project_path = './'
file_extensions = ['.ts', '.tsx']  # Add other extensions as needed
exclude_keywords = ['node_modules', '.next']

# Copy file tree
file_tree = list_files(project_path, file_extensions, exclude_keywords)
pyperclip.copy("File Tree:\n" + file_tree + "\n\n")

# Collect all the code excluding the files with specified keywords
all_code = ''
for root, _, files in os.walk(project_path):
    for file in files:
        if any(file.endswith(ext) for ext in file_extensions) and not any(keyword in file for keyword in exclude_keywords):
            # Special handling for the 'utils' folder
            if 'node_modules' in root or '.next' in root:
                continue
            file_path = os.path.join(root, file)
            with open(file_path, 'r') as f:
                all_code += f"### {file_path} ###\n"  # File title with full path
                all_code += f.read() + '\n\n'

pyperclip.copy(all_code)
print("All code and file tree have been copied to the clipboard.")
print("File Tree:\n" + file_tree)
