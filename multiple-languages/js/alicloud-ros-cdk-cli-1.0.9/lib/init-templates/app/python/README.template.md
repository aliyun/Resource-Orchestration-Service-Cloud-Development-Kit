
# Welcome to your ROS CDK Python project!

This is a blank project for Python development with ROS CDK.

The `cdk.json` file tells the ROS CDK Toolkit how to execute your app.

This project is set up like a standard Python project.  The initialization
process also creates a virtualenv within this project, stored under the `.venv`
directory.  To create the virtualenv it assumes that there is a `python3`
(or `python` for Windows) executable in your path with access to the `venv`
package. If for any reason the automatic creation of the virtualenv fails,
you can create the virtualenv manually.

To manually create a virtualenv on MacOS and Linux:

```
$ %python-executable% -m venv .venv
```

After the init process completes and the virtualenv is created, you can use the following
step to activate your virtualenv.

```
$ source .venv/bin/activate
```

If you are a Windows platform, you would activate the virtualenv like this:

```
% .venv\Scripts\activate.bat
```

Once the virtualenv is activated, you can install the required dependencies.

```
$ pip install -r requirements.txt
```


To add additional dependencies, for example other ROS CDK libraries, just add
them to your `setup.py` file and rerun the `pip install -r requirements.txt`
command.

## Useful commands

* `ros-cdk list-stacks`   List all stacks
* `ros-cdk list`          List stacks in an application
* `ros-cdk deploy`        deploy this stack to your default ros account/region
* `ros-cdk event`         Get resource events within the resource stacks
* `ros-cdk resource`      Get resources in the resource stacks
* `ros-cdk diff`          compare deployed stack with current state
* `ros-cdk synth`         emits the synthesized ROS template
* `ros-cdk destroy`       Deletes a stack from an ALIYUN account
* `python -m unittest -v` perform the python unit tests

Enjoy!
