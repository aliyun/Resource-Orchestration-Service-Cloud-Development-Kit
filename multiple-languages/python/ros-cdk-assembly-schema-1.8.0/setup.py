import json
import setuptools

kwargs = json.loads(
    """
{
    "name": "ros-cdk-assembly-schema",
    "version": "1.8.0",
    "description": "Aliyun SDK Copyright (C) Alibaba Cloud Computing All rights reserved. http://www.aliyun.com",
    "license": "Apache-2.0",
    "url": "https://github.com/aliyun/Resource-Orchestration-Service-Cloud-Development-Kit.git",
    "long_description_content_type": "text/markdown",
    "author": "ROS Development Team",
    "bdist_wheel": {
        "universal": true
    },
    "project_urls": {
        "Source": "https://github.com/aliyun/Resource-Orchestration-Service-Cloud-Development-Kit.git"
    },
    "package_dir": {
        "": "src"
    },
    "packages": [
        "ros_cdk_assembly_schema",
        "ros_cdk_assembly_schema._jsii"
    ],
    "package_data": {
        "ros_cdk_assembly_schema._jsii": [
            "ros-cdk-assembly-schema@1.8.0.jsii.tgz"
        ],
        "ros_cdk_assembly_schema": [
            "py.typed"
        ]
    },
    "python_requires": "~=3.7",
    "install_requires": [
        "jsii>1.12.0, <=1.85.0",
        "publication>=0.0.3",
        "typeguard~=2.13.3"
    ],
    "classifiers": [
        "Intended Audience :: Developers",
        "Operating System :: OS Independent",
        "Programming Language :: JavaScript",
        "Programming Language :: Python :: 3 :: Only",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Programming Language :: Python :: 3.10",
        "Programming Language :: Python :: 3.11",
        "Typing :: Typed",
        "License :: OSI Approved",
        "Programming Language :: Python :: 3"
    ],
    "scripts": []
}
"""
)

with open("README.md", encoding="utf8") as fp:
    kwargs["long_description"] = fp.read()


setuptools.setup(**kwargs)
