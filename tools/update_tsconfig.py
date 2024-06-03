import json
import os
import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--folder_path', type=str, default=None)
args = parser.parse_args()
folder_path = args.folder_path

tsconfig_path = os.path.join(folder_path, "tsconfig.json")

with open(tsconfig_path, "r") as file:
    data = json.load(file)

if "compilerOptions" in data:
    compiler_options = data["compilerOptions"]

    if "charset" in compiler_options:
        del compiler_options["charset"]

    with open(tsconfig_path, "w") as file:
        json.dump(data, file, indent=4)
