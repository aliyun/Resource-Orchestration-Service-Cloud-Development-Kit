'''
# `@alicloud/ros-cdk-core`

> TODO: description

## Usage

```
const core = require('@alicloud/ros-cdk-core');

// TODO: DEMONSTRATE API
```
'''
import abc
import builtins
import datetime
import enum
import typing

import jsii
import publication
import typing_extensions

from typeguard import check_type

from ._jsii import *

import constructs as _constructs_77d1e7e8
import ros_cdk_cxapi as _ros_cdk_cxapi_45dace6b


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.AppProps",
    jsii_struct_bases=[],
    name_mapping={
        "auto_synth": "autoSynth",
        "context": "context",
        "outdir": "outdir",
        "runtime_info": "runtimeInfo",
        "stack_traces": "stackTraces",
        "tree_metadata": "treeMetadata",
    },
)
class AppProps:
    def __init__(
        self,
        *,
        auto_synth: typing.Optional[builtins.bool] = None,
        context: typing.Optional[typing.Mapping[builtins.str, builtins.str]] = None,
        outdir: typing.Optional[builtins.str] = None,
        runtime_info: typing.Optional[builtins.bool] = None,
        stack_traces: typing.Optional[builtins.bool] = None,
        tree_metadata: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Initialization props for apps.

        :param auto_synth: Automatically call 'synth()' before the program exits. If you set this, you don't have to call 'synth()' explicitly. Note that this feature is only available for certain programming languages, and calling 'synth()' is still recommended. Default true if running via CDK CLI ('CDK_OUTDIR' is set), 'false' otherwise
        :param context: Additional context values for the application. Context set by the CLI or the 'context' key in 'cdk.json' has precedence. Context can be read from any construct using 'node.getContext(key)'. Default: - no additional context
        :param outdir: The output directory into which to emit synthesized artifacts. Default - If this value is *not* set, considers the environment variable 'CDK_OUTDIR'. If 'CDK_OUTDIR' is not defined, uses a temp directory.
        :param runtime_info: Include runtime versioning information. Default: true runtime info is included unless related comtext is set.
        :param stack_traces: Include construct creation stack trace. Default: true stack traces are included unless related context is set.
        :param tree_metadata: Include construct tree metadata as part of the Cloud Assembly. Default: true
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__748c8a4f3f80cbb46f7db3d45e1fc62f897a813df65337c1692a26757af6df49)
            check_type(argname="argument auto_synth", value=auto_synth, expected_type=type_hints["auto_synth"])
            check_type(argname="argument context", value=context, expected_type=type_hints["context"])
            check_type(argname="argument outdir", value=outdir, expected_type=type_hints["outdir"])
            check_type(argname="argument runtime_info", value=runtime_info, expected_type=type_hints["runtime_info"])
            check_type(argname="argument stack_traces", value=stack_traces, expected_type=type_hints["stack_traces"])
            check_type(argname="argument tree_metadata", value=tree_metadata, expected_type=type_hints["tree_metadata"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if auto_synth is not None:
            self._values["auto_synth"] = auto_synth
        if context is not None:
            self._values["context"] = context
        if outdir is not None:
            self._values["outdir"] = outdir
        if runtime_info is not None:
            self._values["runtime_info"] = runtime_info
        if stack_traces is not None:
            self._values["stack_traces"] = stack_traces
        if tree_metadata is not None:
            self._values["tree_metadata"] = tree_metadata

    @builtins.property
    def auto_synth(self) -> typing.Optional[builtins.bool]:
        '''Automatically call 'synth()' before the program exits.

        If you set this, you don't have to call 'synth()' explicitly. Note that
        this feature is only available for certain programming languages, and
        calling 'synth()' is still recommended.

        Default true if running via CDK CLI ('CDK_OUTDIR' is set), 'false'
        otherwise
        '''
        result = self._values.get("auto_synth")
        return typing.cast(typing.Optional[builtins.bool], result)

    @builtins.property
    def context(self) -> typing.Optional[typing.Mapping[builtins.str, builtins.str]]:
        '''Additional context values for the application.

        Context set by the CLI or the 'context' key in 'cdk.json' has precedence.

        Context can be read from any construct using 'node.getContext(key)'.

        :default: - no additional context
        '''
        result = self._values.get("context")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, builtins.str]], result)

    @builtins.property
    def outdir(self) -> typing.Optional[builtins.str]:
        '''The output directory into which to emit synthesized artifacts.

        Default - If this value is *not* set, considers the environment variable 'CDK_OUTDIR'.
        If 'CDK_OUTDIR' is not defined, uses a temp directory.
        '''
        result = self._values.get("outdir")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def runtime_info(self) -> typing.Optional[builtins.bool]:
        '''Include runtime versioning information.

        :default: true runtime info is included unless related comtext is set.
        '''
        result = self._values.get("runtime_info")
        return typing.cast(typing.Optional[builtins.bool], result)

    @builtins.property
    def stack_traces(self) -> typing.Optional[builtins.bool]:
        '''Include construct creation stack trace.

        :default: true stack traces are included unless related context is set.
        '''
        result = self._values.get("stack_traces")
        return typing.cast(typing.Optional[builtins.bool], result)

    @builtins.property
    def tree_metadata(self) -> typing.Optional[builtins.bool]:
        '''Include construct tree metadata as part of the Cloud Assembly.

        :default: true
        '''
        result = self._values.get("tree_metadata")
        return typing.cast(typing.Optional[builtins.bool], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "AppProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ConstructNode(
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.ConstructNode",
):
    '''Represents the construct node in the scope tree.'''

    def __init__(
        self,
        host: "Construct",
        scope: "IConstruct",
        id: builtins.str,
    ) -> None:
        '''
        :param host: -
        :param scope: -
        :param id: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6a47bad65275b85b8612877823d54537652d86b16d9cc47c3f0fe2e682cad87e)
            check_type(argname="argument host", value=host, expected_type=type_hints["host"])
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
        jsii.create(self.__class__, self, [host, scope, id])

    @jsii.member(jsii_name="prepare")
    @builtins.classmethod
    def prepare(cls, node: "ConstructNode") -> None:
        '''(deprecated) Invokes "prepare" on all constructs (depth-first, post-order) in the tree under ``node``.

        :param node: The root node.

        :deprecated: Use ``app.synth()`` instead

        :stability: deprecated
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6645ca4ad5ccd4cd68a4050a9e5c2511fdb248cb9310394c721b1c69950e5975)
            check_type(argname="argument node", value=node, expected_type=type_hints["node"])
        return typing.cast(None, jsii.sinvoke(cls, "prepare", [node]))

    @jsii.member(jsii_name="synth")
    @builtins.classmethod
    def synth(
        cls,
        node: "ConstructNode",
        *,
        outdir: typing.Optional[builtins.str] = None,
        skip_validation: typing.Optional[builtins.bool] = None,
        runtime_info: typing.Optional[typing.Union[_ros_cdk_cxapi_45dace6b.RuntimeInfo, typing.Dict[builtins.str, typing.Any]]] = None,
    ) -> _ros_cdk_cxapi_45dace6b.CloudAssembly:
        '''(deprecated) Synthesizes a CloudAssembly from a construct tree.

        :param node: The root of the construct tree.
        :param outdir: (deprecated) The output directory into which to synthesize the cloud assembly. Default: - creates a temporary directory
        :param skip_validation: (deprecated) Whether synthesis should skip the validation phase. Default: false
        :param runtime_info: Include the specified runtime information (module versions) in manifest. Default: - if this option is not specified, runtime info will not be included

        :deprecated: Use ``app.synth()`` or ``stage.synth()`` instead

        :stability: deprecated
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__df4441eafb1cb1046b32ca5295d005d3131df919989d3b694d1ce2e3881d2b51)
            check_type(argname="argument node", value=node, expected_type=type_hints["node"])
        options = SynthesisOptions(
            outdir=outdir, skip_validation=skip_validation, runtime_info=runtime_info
        )

        return typing.cast(_ros_cdk_cxapi_45dace6b.CloudAssembly, jsii.sinvoke(cls, "synth", [node, options]))

    @jsii.member(jsii_name="validate")
    @builtins.classmethod
    def validate(cls, node: "ConstructNode") -> typing.List["ValidationError"]:
        '''Invokes "validate" on all constructs in the tree (depth-first, pre-order) and returns the list of all errors.

        An empty list indicates that there are no errors.

        :param node: The root node.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__15d58cf30911824dccc4b726e85b99d3c5af21fbe85acb679afb5632b9b4410b)
            check_type(argname="argument node", value=node, expected_type=type_hints["node"])
        return typing.cast(typing.List["ValidationError"], jsii.sinvoke(cls, "validate", [node]))

    @jsii.member(jsii_name="addDependency")
    def add_dependency(self, *dependencies: "IDependable") -> None:
        '''Add an ordering dependency on another Construct.

        All constructs in the dependency's scope will be deployed before any
        construct in this construct's scope.

        :param dependencies: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4621c8e910f9ed69913adeffe0161d40cfde5ebadeba3e7bd20a4b0cfbfee3b9)
            check_type(argname="argument dependencies", value=dependencies, expected_type=typing.Tuple[type_hints["dependencies"], ...]) # pyright: ignore [reportGeneralTypeIssues]
        return typing.cast(None, jsii.invoke(self, "addDependency", [*dependencies]))

    @jsii.member(jsii_name="addError")
    def add_error(self, message: builtins.str) -> None:
        '''Adds an { "error":  } metadata entry to this construct.

        The toolkit will fail synthesis when errors are reported.

        :param message: The error message.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5828fca22ddd84c8c5f392d283078c4556c6a3104e3afda44917f05f086da22f)
            check_type(argname="argument message", value=message, expected_type=type_hints["message"])
        return typing.cast(None, jsii.invoke(self, "addError", [message]))

    @jsii.member(jsii_name="addInfo")
    def add_info(self, message: builtins.str) -> None:
        '''Adds a { "info":  } metadata entry to this construct.

        The toolkit will display the info message when apps are synthesized.

        :param message: The info message.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7f520bb9a468976f66105a240b5a66c7ade94873ab55373e1ac571b500c21d6a)
            check_type(argname="argument message", value=message, expected_type=type_hints["message"])
        return typing.cast(None, jsii.invoke(self, "addInfo", [message]))

    @jsii.member(jsii_name="addMetadata")
    def add_metadata(
        self,
        type: builtins.str,
        data: typing.Any,
        from_function: typing.Any = None,
    ) -> None:
        '''Adds a metadata entry to this construct.

        Entries are arbitrary values and will also include a stack trace to allow tracing back to
        the code location for when the entry was added. It can be used, for example, to include source
        mapping in templates to improve diagnostics.

        :param type: a string denoting the type of metadata.
        :param data: the value of the metadata (can be a Token). If null/undefined, metadata will not be added.
        :param from_function: a function under which to restrict the metadata entry's stack trace (defaults to this.addMetadata).
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__959c55db0db52728d3f598e4c83dd98fc47eb2297c12d34642150aad945923fd)
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            check_type(argname="argument data", value=data, expected_type=type_hints["data"])
            check_type(argname="argument from_function", value=from_function, expected_type=type_hints["from_function"])
        return typing.cast(None, jsii.invoke(self, "addMetadata", [type, data, from_function]))

    @jsii.member(jsii_name="addWarning")
    def add_warning(self, message: builtins.str) -> None:
        '''Adds a { "warning":  } metadata entry to this construct.

        The toolkit will display the warning when an app is synthesized, or fail
        if run in --strict mode.

        :param message: The warning message.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__570f16aaf6d6ed0a36aaf59690d63691db9c638fa7db4426ffff61a3eec2507a)
            check_type(argname="argument message", value=message, expected_type=type_hints["message"])
        return typing.cast(None, jsii.invoke(self, "addWarning", [message]))

    @jsii.member(jsii_name="findAll")
    def find_all(
        self,
        order: typing.Optional["ConstructOrder"] = None,
    ) -> typing.List["IConstruct"]:
        '''Return this construct and all of its children in the given order.

        :param order: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f373a014879a19ab5383814e7c60e2fdc9b85ff481266088ce12f7a126854d60)
            check_type(argname="argument order", value=order, expected_type=type_hints["order"])
        return typing.cast(typing.List["IConstruct"], jsii.invoke(self, "findAll", [order]))

    @jsii.member(jsii_name="findChild")
    def find_child(self, id: builtins.str) -> "IConstruct":
        '''Return a direct child by id.

        Throws an error if the child is not found.

        :param id: Identifier of direct child.

        :return: Child with the given id.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d4e9a97593ce9f2c58b87536455eb37e870708a060b383b357d9f6fcb2469e26)
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
        return typing.cast("IConstruct", jsii.invoke(self, "findChild", [id]))

    @jsii.member(jsii_name="setContext")
    def set_context(self, key: builtins.str, value: typing.Any) -> None:
        '''This can be used to set contextual values.

        Context must be set before any children are added, since children may consult context info during construction.
        If the key already exists, it will be overridden.

        :param key: The context key.
        :param value: The context value.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5ffc85bdb046e28e24026eca3ca7feb5e1cbec09d4e2d58eb5f259741e0f5805)
            check_type(argname="argument key", value=key, expected_type=type_hints["key"])
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        return typing.cast(None, jsii.invoke(self, "setContext", [key, value]))

    @jsii.member(jsii_name="tryFindChild")
    def try_find_child(self, id: builtins.str) -> typing.Optional["IConstruct"]:
        '''Return a direct child by id, or undefined.

        :param id: Identifier of direct child.

        :return: the child if found, or undefined
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5cbe01369ed9844edb9ceff08f9f1d6ffdf493083e9de9b90f37b2eb7024c63c)
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
        return typing.cast(typing.Optional["IConstruct"], jsii.invoke(self, "tryFindChild", [id]))

    @jsii.member(jsii_name="tryGetContext")
    def try_get_context(self, key: builtins.str) -> typing.Any:
        '''Retrieves a value from tree context.

        Context is usually initialized at the root, but can be overridden at any point in the tree.

        :param key: The context key.

        :return: The context value or ``undefined`` if there is no context value for thie key.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0d5e8d9fc5378c36b1914ff9ef3d1743c82cf3a6020c5d4b16ef390692134d84)
            check_type(argname="argument key", value=key, expected_type=type_hints["key"])
        return typing.cast(typing.Any, jsii.invoke(self, "tryGetContext", [key]))

    @jsii.member(jsii_name="tryRemoveChild")
    def try_remove_child(self, child_name: builtins.str) -> builtins.bool:
        '''(experimental) Remove the child with the given name, if present.

        :param child_name: -

        :return: Whether a child with the given name was deleted.

        :stability: experimental
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4528d4bf540c03795edbfe799321d679a7800f5bda281eb50419a46623ff4eb1)
            check_type(argname="argument child_name", value=child_name, expected_type=type_hints["child_name"])
        return typing.cast(builtins.bool, jsii.invoke(self, "tryRemoveChild", [child_name]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="PATH_SEP")
    def PATH_SEP(cls) -> builtins.str:
        '''Separator used to delimit construct path components.'''
        return typing.cast(builtins.str, jsii.sget(cls, "PATH_SEP"))

    @builtins.property
    @jsii.member(jsii_name="children")
    def children(self) -> typing.List["IConstruct"]:
        '''All direct children of this construct.'''
        return typing.cast(typing.List["IConstruct"], jsii.get(self, "children"))

    @builtins.property
    @jsii.member(jsii_name="dependencies")
    def dependencies(self) -> typing.List["Dependency"]:
        '''Return all dependencies registered on this node or any of its children.'''
        return typing.cast(typing.List["Dependency"], jsii.get(self, "dependencies"))

    @builtins.property
    @jsii.member(jsii_name="id")
    def id(self) -> builtins.str:
        '''The id of this construct within the current scope.

        This is a a scope-unique id. To obtain an app-unique id for this construct, use ``uniqueId``.
        '''
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @builtins.property
    @jsii.member(jsii_name="locked")
    def locked(self) -> builtins.bool:
        '''Returns true if this construct or the scopes in which it is defined are locked.'''
        return typing.cast(builtins.bool, jsii.get(self, "locked"))

    @builtins.property
    @jsii.member(jsii_name="metadata")
    def metadata(self) -> typing.List[_ros_cdk_cxapi_45dace6b.MetadataEntry]:
        '''An immutable array of metadata objects associated with this construct.

        This can be used, for example, to implement support for deprecation notices, source mapping, etc.
        '''
        return typing.cast(typing.List[_ros_cdk_cxapi_45dace6b.MetadataEntry], jsii.get(self, "metadata"))

    @builtins.property
    @jsii.member(jsii_name="path")
    def path(self) -> builtins.str:
        '''The full, absolute path of this construct in the tree.

        Components are separated by '/'.
        '''
        return typing.cast(builtins.str, jsii.get(self, "path"))

    @builtins.property
    @jsii.member(jsii_name="root")
    def root(self) -> "IConstruct":
        '''
        :return: The root of the construct tree.
        '''
        return typing.cast("IConstruct", jsii.get(self, "root"))

    @builtins.property
    @jsii.member(jsii_name="scopes")
    def scopes(self) -> typing.List["IConstruct"]:
        '''All parent scopes of this construct.

        :return:

        a list of parent scopes. The last element in the list will always
        be the current construct and the first element will be the root of the
        tree.
        '''
        return typing.cast(typing.List["IConstruct"], jsii.get(self, "scopes"))

    @builtins.property
    @jsii.member(jsii_name="uniqueId")
    def unique_id(self) -> builtins.str:
        '''A tree-global unique alphanumeric identifier for this construct.

        Includes all components of the tree.
        '''
        return typing.cast(builtins.str, jsii.get(self, "uniqueId"))

    @builtins.property
    @jsii.member(jsii_name="scope")
    def scope(self) -> typing.Optional["IConstruct"]:
        '''Returns the scope in which this construct is defined.

        The value is ``undefined`` at the root of the construct scope tree.
        '''
        return typing.cast(typing.Optional["IConstruct"], jsii.get(self, "scope"))

    @builtins.property
    @jsii.member(jsii_name="defaultChild")
    def default_child(self) -> typing.Optional["IConstruct"]:
        '''Returns the child construct that has the id ``Default`` or ``Resource"``.

        This is usually the construct that provides the bulk of the underlying functionality.
        Useful for modifications of the underlying construct that are not available at the higher levels.
        Override the defaultChild property.

        This should only be used in the cases where the correct
        default child is not named 'Resource' or 'Default' as it
        should be.

        If you set this to undefined, the default behavior of finding
        the child named 'Resource' or 'Default' will be used.

        :return: a construct or undefined if there is no default child

        :throws: if there is more than one child
        '''
        return typing.cast(typing.Optional["IConstruct"], jsii.get(self, "defaultChild"))

    @default_child.setter
    def default_child(self, value: typing.Optional["IConstruct"]) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1122548f7c053a88310186a509d813226fa408734e0b465c5934441a333f1cf4)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "defaultChild", value)


@jsii.enum(jsii_type="@alicloud/ros-cdk-core.ConstructOrder")
class ConstructOrder(enum.Enum):
    '''In what order to return constructs.'''

    PREORDER = "PREORDER"
    '''Depth-first, pre-order.'''
    POSTORDER = "POSTORDER"
    '''Depth-first, post-order (leaf nodes first).'''


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.DefaultStackSynthesizerProps",
    jsii_struct_bases=[],
    name_mapping={"qualifier": "qualifier"},
)
class DefaultStackSynthesizerProps:
    def __init__(self, *, qualifier: typing.Optional[builtins.str] = None) -> None:
        '''Configuration properties for DefaultStackSynthesizer.

        :param qualifier: Qualifier to disambiguate multiple environments in the same account. You can use this and leave the other naming properties empty if you have deployed the bootstrap environment with standard names but only differnet qualifiers.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ba524959d80a1a88eee86a3a039a209594e07b39da331bb1cafb9fc849c5a97d)
            check_type(argname="argument qualifier", value=qualifier, expected_type=type_hints["qualifier"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if qualifier is not None:
            self._values["qualifier"] = qualifier

    @builtins.property
    def qualifier(self) -> typing.Optional[builtins.str]:
        '''Qualifier to disambiguate multiple environments in the same account.

        You can use this and leave the other naming properties empty if you have deployed
        the bootstrap environment with standard names but only differnet qualifiers.
        '''
        result = self._values.get("qualifier")
        return typing.cast(typing.Optional[builtins.str], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "DefaultStackSynthesizerProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class DependableTrait(
    metaclass=jsii.JSIIAbstractClass,
    jsii_type="@alicloud/ros-cdk-core.DependableTrait",
):
    '''(experimental) Trait for IDependable.

    Traits are interfaces that are privately implemented by objects. Instead of
    showing up in the public interface of a class, they need to be queried
    explicitly. This is used to implement certain framework features that are
    not intended to be used by Construct consumers, and so should be hidden
    from accidental use.

    :stability: experimental

    Example::

        // Usage
        const roots = DependableTrait.get(construct).dependencyRoots;
        
        // Definition
        DependableTrait.implement(construct, {
          get dependencyRoots() { return []; }
        });
    '''

    def __init__(self) -> None:
        jsii.create(self.__class__, self, [])

    @jsii.member(jsii_name="get")
    @builtins.classmethod
    def get(cls, instance: "IDependable") -> "DependableTrait":
        '''(experimental) Return the matching DependableTrait for the given class instance.

        :param instance: -

        :stability: experimental
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__be877a98a70eaf2e415053ecc3597f54d82bf1b02ab801068be53d34c3645e0b)
            check_type(argname="argument instance", value=instance, expected_type=type_hints["instance"])
        return typing.cast("DependableTrait", jsii.sinvoke(cls, "get", [instance]))

    @jsii.member(jsii_name="implement")
    @builtins.classmethod
    def implement(cls, instance: "IDependable", trait: "DependableTrait") -> None:
        '''(experimental) Register ``instance`` to have the given DependableTrait.

        Should be called in the class constructor.

        :param instance: -
        :param trait: -

        :stability: experimental
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__27f51d221a1d3f0592bfeaf5e954b8d1ed157c843e51a32099396c3c78cc123d)
            check_type(argname="argument instance", value=instance, expected_type=type_hints["instance"])
            check_type(argname="argument trait", value=trait, expected_type=type_hints["trait"])
        return typing.cast(None, jsii.sinvoke(cls, "implement", [instance, trait]))

    @builtins.property
    @jsii.member(jsii_name="dependencyRoots")
    @abc.abstractmethod
    def dependency_roots(self) -> typing.List["IConstruct"]:
        '''(experimental) The set of constructs that form the root of this dependable.

        All resources under all returned constructs are included in the ordering
        dependency.

        :stability: experimental
        '''
        ...


class _DependableTraitProxy(DependableTrait):
    @builtins.property
    @jsii.member(jsii_name="dependencyRoots")
    def dependency_roots(self) -> typing.List["IConstruct"]:
        '''(experimental) The set of constructs that form the root of this dependable.

        All resources under all returned constructs are included in the ordering
        dependency.

        :stability: experimental
        '''
        return typing.cast(typing.List["IConstruct"], jsii.get(self, "dependencyRoots"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the abstract class
typing.cast(typing.Any, DependableTrait).__jsii_proxy_class__ = lambda : _DependableTraitProxy


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.Dependency",
    jsii_struct_bases=[],
    name_mapping={"source": "source", "target": "target"},
)
class Dependency:
    def __init__(self, *, source: "IConstruct", target: "IConstruct") -> None:
        '''A single dependency.

        :param source: Source the dependency.
        :param target: Target of the dependency.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__be971e1a5b7d053e1a29fe327cce65a823280ff9c0231b2ae0a5de6c0c9cafaa)
            check_type(argname="argument source", value=source, expected_type=type_hints["source"])
            check_type(argname="argument target", value=target, expected_type=type_hints["target"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "source": source,
            "target": target,
        }

    @builtins.property
    def source(self) -> "IConstruct":
        '''Source the dependency.'''
        result = self._values.get("source")
        assert result is not None, "Required property 'source' is missing"
        return typing.cast("IConstruct", result)

    @builtins.property
    def target(self) -> "IConstruct":
        '''Target of the dependency.'''
        result = self._values.get("target")
        assert result is not None, "Required property 'target' is missing"
        return typing.cast("IConstruct", result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "Dependency(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.EncodingOptions",
    jsii_struct_bases=[],
    name_mapping={"display_hint": "displayHint"},
)
class EncodingOptions:
    def __init__(self, *, display_hint: typing.Optional[builtins.str] = None) -> None:
        '''Properties to string encodings.

        :param display_hint: A hint for the Token's purpose when stringifying it.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__592ddd870eea1153b99934c7382cc772fd9c62743fc04f026567e47d474c14a6)
            check_type(argname="argument display_hint", value=display_hint, expected_type=type_hints["display_hint"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if display_hint is not None:
            self._values["display_hint"] = display_hint

    @builtins.property
    def display_hint(self) -> typing.Optional[builtins.str]:
        '''A hint for the Token's purpose when stringifying it.'''
        result = self._values.get("display_hint")
        return typing.cast(typing.Optional[builtins.str], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "EncodingOptions(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Fn(metaclass=jsii.JSIIMeta, jsii_type="@alicloud/ros-cdk-core.Fn"):
    '''Resource Orchestration Service intrinsic functions.

    https://help.aliyun.com/document_detail/28852.html
    '''

    @jsii.member(jsii_name="add")
    @builtins.classmethod
    def add(
        cls,
        values: typing.Union[jsii.Number, typing.Sequence[typing.Any], typing.Mapping[builtins.str, typing.Any]],
    ) -> "IResolvable":
        '''
        :param values: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c4463aa739260d8ce63c1fc5c0d0104b648438afea3cc84fd0508ce2ff89e41d)
            check_type(argname="argument values", value=values, expected_type=type_hints["values"])
        return typing.cast("IResolvable", jsii.sinvoke(cls, "add", [values]))

    @jsii.member(jsii_name="avg")
    @builtins.classmethod
    def avg(
        cls,
        ndigits: jsii.Number,
        values: typing.Sequence[jsii.Number],
    ) -> jsii.Number:
        '''
        :param ndigits: -
        :param values: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c4603e8d5b00df56f000c5dadb14d841aa452846777e902e565f1c0b2decdd8c)
            check_type(argname="argument ndigits", value=ndigits, expected_type=type_hints["ndigits"])
            check_type(argname="argument values", value=values, expected_type=type_hints["values"])
        return typing.cast(jsii.Number, jsii.sinvoke(cls, "avg", [ndigits, values]))

    @jsii.member(jsii_name="base64Decode")
    @builtins.classmethod
    def base64_decode(cls, data: builtins.str) -> builtins.str:
        '''
        :param data: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5654a30fb1a45859f496027acf7a03d482124e055620291bac9e02da204e9cb6)
            check_type(argname="argument data", value=data, expected_type=type_hints["data"])
        return typing.cast(builtins.str, jsii.sinvoke(cls, "base64Decode", [data]))

    @jsii.member(jsii_name="base64Encode")
    @builtins.classmethod
    def base64_encode(cls, data: builtins.str) -> builtins.str:
        '''The intrinsic function ``Fn::Base64`` returns the Base64 representation of the input string.

        :param data: The string value you want to convert to Base64.

        :return: a token represented as a string
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ce3856953e5d2815bfc23c0d182df0cf035b30feda4d849f172136dd500a32a0)
            check_type(argname="argument data", value=data, expected_type=type_hints["data"])
        return typing.cast(builtins.str, jsii.sinvoke(cls, "base64Encode", [data]))

    @jsii.member(jsii_name="calculate")
    @builtins.classmethod
    def calculate(
        cls,
        values: builtins.str,
        ndigits: jsii.Number,
        para: typing.Sequence[jsii.Number],
    ) -> jsii.Number:
        '''
        :param values: -
        :param ndigits: -
        :param para: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__247d1bde91a0d2f5bdbe0d77b1d77116951cc7a286d8876b7ee3c841e3d01986)
            check_type(argname="argument values", value=values, expected_type=type_hints["values"])
            check_type(argname="argument ndigits", value=ndigits, expected_type=type_hints["ndigits"])
            check_type(argname="argument para", value=para, expected_type=type_hints["para"])
        return typing.cast(jsii.Number, jsii.sinvoke(cls, "calculate", [values, ndigits, para]))

    @jsii.member(jsii_name="conditionAnd")
    @builtins.classmethod
    def condition_and(
        cls,
        *conditions: typing.Union[builtins.str, "IRosConditionExpression"],
    ) -> "IRosConditionExpression":
        '''Returns true if all the specified conditions evaluate to true, or returns false if any one of the conditions evaluates to false.

        ``Fn::And`` acts as
        an AND operator. The minimum number of conditions that you can include is
        2, and the maximum is 10.

        :param conditions: conditions to AND.

        :return: an FnCondition token
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1d3b053d7bd2380d1777011cb385769042414d91dcd1ac5c5d4126a11fb6ced7)
            check_type(argname="argument conditions", value=conditions, expected_type=typing.Tuple[type_hints["conditions"], ...]) # pyright: ignore [reportGeneralTypeIssues]
        return typing.cast("IRosConditionExpression", jsii.sinvoke(cls, "conditionAnd", [*conditions]))

    @jsii.member(jsii_name="conditionEquals")
    @builtins.classmethod
    def condition_equals(
        cls,
        lhs: typing.Any,
        rhs: typing.Any,
    ) -> "IRosConditionExpression":
        '''Compares if two values are equal.

        Returns true if the two values are equal
        or false if they aren't.

        :param lhs: A value of any type that you want to compare.
        :param rhs: A value of any type that you want to compare.

        :return: an FnCondition token
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c32d8c967b76fe1b22006921d766d24460ced611ddaeca23b0cef97797df9dee)
            check_type(argname="argument lhs", value=lhs, expected_type=type_hints["lhs"])
            check_type(argname="argument rhs", value=rhs, expected_type=type_hints["rhs"])
        return typing.cast("IRosConditionExpression", jsii.sinvoke(cls, "conditionEquals", [lhs, rhs]))

    @jsii.member(jsii_name="conditionIf")
    @builtins.classmethod
    def condition_if(
        cls,
        condition_id: typing.Union[builtins.str, "IRosConditionExpression"],
        value_if_true: typing.Any,
        value_if_false: typing.Any,
    ) -> typing.Any:
        '''Returns one value if the specified condition evaluates to true and another value if the specified condition evaluates to false.

        :param condition_id: A reference to a condition in the Conditions section. Use the condition's name to reference it.
        :param value_if_true: A value to be returned if the specified condition evaluates to true.
        :param value_if_false: A value to be returned if the specified condition evaluates to false.

        :return: an FnCondition token
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__98d6a20e1d755c3448e9346d51da27f01a171bd61c63ea885517e0002d03b1c1)
            check_type(argname="argument condition_id", value=condition_id, expected_type=type_hints["condition_id"])
            check_type(argname="argument value_if_true", value=value_if_true, expected_type=type_hints["value_if_true"])
            check_type(argname="argument value_if_false", value=value_if_false, expected_type=type_hints["value_if_false"])
        return typing.cast(typing.Any, jsii.sinvoke(cls, "conditionIf", [condition_id, value_if_true, value_if_false]))

    @jsii.member(jsii_name="conditionNot")
    @builtins.classmethod
    def condition_not(
        cls,
        condition: typing.Union[builtins.str, "IRosConditionExpression"],
    ) -> "IRosConditionExpression":
        '''Returns true for a condition that evaluates to false or returns false for a condition that evaluates to true.

        ``Fn::Not`` acts as a NOT operator.

        :param condition: A condition such as ``Fn::Equals`` that evaluates to true or false.

        :return: an FnCondition token
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d0f1efc96374482cd77e5e775be7aaf6b0826705fbb51a9778b524db9beb7f5b)
            check_type(argname="argument condition", value=condition, expected_type=type_hints["condition"])
        return typing.cast("IRosConditionExpression", jsii.sinvoke(cls, "conditionNot", [condition]))

    @jsii.member(jsii_name="conditionOr")
    @builtins.classmethod
    def condition_or(
        cls,
        *conditions: typing.Union[builtins.str, "IRosConditionExpression"],
    ) -> "IRosConditionExpression":
        '''Returns true if any one of the specified conditions evaluate to true, or returns false if all of the conditions evaluates to false.

        ``Fn::Or`` acts
        as an OR operator. The minimum number of conditions that you can include is
        2, and the maximum is 10.

        :param conditions: conditions that evaluates to true or false.

        :return: an FnCondition token
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__87426609e3c35a1db0e27d2a3800878e1f22676645588ff18f69707d682c3b90)
            check_type(argname="argument conditions", value=conditions, expected_type=typing.Tuple[type_hints["conditions"], ...]) # pyright: ignore [reportGeneralTypeIssues]
        return typing.cast("IRosConditionExpression", jsii.sinvoke(cls, "conditionOr", [*conditions]))

    @jsii.member(jsii_name="findInMap")
    @builtins.classmethod
    def find_in_map(
        cls,
        map_name: builtins.str,
        top_level_key: builtins.str,
        second_level_key: builtins.str,
    ) -> "IResolvable":
        '''The intrinsic function ``Fn::FindInMap`` returns the value corresponding to keys in a two-level map that is declared in the Mappings section.

        :param map_name: -
        :param top_level_key: -
        :param second_level_key: -

        :return: a token represented as a string
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__483847ae80b6d31323ba40a393751618bf0a768d1d766b45ec2a6e9a1c81cbfa)
            check_type(argname="argument map_name", value=map_name, expected_type=type_hints["map_name"])
            check_type(argname="argument top_level_key", value=top_level_key, expected_type=type_hints["top_level_key"])
            check_type(argname="argument second_level_key", value=second_level_key, expected_type=type_hints["second_level_key"])
        return typing.cast("IResolvable", jsii.sinvoke(cls, "findInMap", [map_name, top_level_key, second_level_key]))

    @jsii.member(jsii_name="getAtt")
    @builtins.classmethod
    def get_att(
        cls,
        logical_name_of_resource: builtins.str,
        attribute_name: builtins.str,
    ) -> "IResolvable":
        '''The ``Fn::GetAtt`` intrinsic function returns the value of an attribute from a resource in the template.

        :param logical_name_of_resource: The logical name (also called logical ID) of the resource that contains the attribute that you want.
        :param attribute_name: The name of the resource-specific attribute whose value you want. See the resource's reference page for details about the attributes available for that resource type.

        :return: an IResolvable object
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8c616186d3b472030fc6ff0709da54ba8f4263acff902f4e13dc63abddb12693)
            check_type(argname="argument logical_name_of_resource", value=logical_name_of_resource, expected_type=type_hints["logical_name_of_resource"])
            check_type(argname="argument attribute_name", value=attribute_name, expected_type=type_hints["attribute_name"])
        return typing.cast("IResolvable", jsii.sinvoke(cls, "getAtt", [logical_name_of_resource, attribute_name]))

    @jsii.member(jsii_name="getAzs")
    @builtins.classmethod
    def get_azs(cls, region: builtins.str) -> typing.List[builtins.str]:
        '''The intrinsic function ``Fn::GetAZs`` returns an array that lists Availability Zones for a specified region.

        Because customers have access to
        different Availability Zones, the intrinsic function ``Fn::GetAZs`` enables
        template authors to write templates that adapt to the calling user's
        access. That way you don't have to hard-code a full list of Availability
        Zones for a specified region.

        :param region: The name of the region for which you want to get the Availability Zones. You can use the ROS::Region pseudo parameter to specify the region in which the stack is created. Specifying an empty string is equivalent to specifying ROS::Region.

        :return: a token represented as a string array
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d5df40a11802df885fed03fa5ee963ab074e2dd8e1f13cd43d87df7b9facfb9c)
            check_type(argname="argument region", value=region, expected_type=type_hints["region"])
        return typing.cast(typing.List[builtins.str], jsii.sinvoke(cls, "getAzs", [region]))

    @jsii.member(jsii_name="getJsonValue")
    @builtins.classmethod
    def get_json_value(cls, key: builtins.str, json_data: typing.Any) -> builtins.str:
        '''
        :param key: -
        :param json_data: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9bec0ea9134fb15498bbd9212d243dbe6cb81310293221509061e9dbe3df6313)
            check_type(argname="argument key", value=key, expected_type=type_hints["key"])
            check_type(argname="argument json_data", value=json_data, expected_type=type_hints["json_data"])
        return typing.cast(builtins.str, jsii.sinvoke(cls, "getJsonValue", [key, json_data]))

    @jsii.member(jsii_name="getStackOutput")
    @builtins.classmethod
    def get_stack_output(
        cls,
        stack_id: builtins.str,
        output_key: builtins.str,
        stack_region: typing.Optional[builtins.str] = None,
    ) -> "IResolvable":
        '''The intrinsic function ``Fn::GetStackOutput`` returns the value of an output exported by another stack.

        :param stack_id: -
        :param output_key: -
        :param stack_region: -

        :return: a token represented as a string
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ffa0ab99cd7d646eb78d61ad0b07aa230afdb88914c828db09aaab14cf714839)
            check_type(argname="argument stack_id", value=stack_id, expected_type=type_hints["stack_id"])
            check_type(argname="argument output_key", value=output_key, expected_type=type_hints["output_key"])
            check_type(argname="argument stack_region", value=stack_region, expected_type=type_hints["stack_region"])
        return typing.cast("IResolvable", jsii.sinvoke(cls, "getStackOutput", [stack_id, output_key, stack_region]))

    @jsii.member(jsii_name="join")
    @builtins.classmethod
    def join(
        cls,
        delimiter: builtins.str,
        list_of_values: typing.Sequence[builtins.str],
    ) -> builtins.str:
        '''The intrinsic function ``Fn::Join`` appends a set of values into a single value, separated by the specified delimiter.

        If a delimiter is the empty
        string, the set of values are concatenated with no delimiter.

        :param delimiter: The value you want to occur between fragments. The delimiter will occur between fragments only. It will not terminate the final value.
        :param list_of_values: The list of values you want combined.

        :return: a token represented as a string
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__88f3fc6721043fc599f60ea05b463881dcf4075d5127c09179c02a1690454ef0)
            check_type(argname="argument delimiter", value=delimiter, expected_type=type_hints["delimiter"])
            check_type(argname="argument list_of_values", value=list_of_values, expected_type=type_hints["list_of_values"])
        return typing.cast(builtins.str, jsii.sinvoke(cls, "join", [delimiter, list_of_values]))

    @jsii.member(jsii_name="jq")
    @builtins.classmethod
    def jq(
        cls,
        method: builtins.str,
        script: builtins.str,
        input_string: typing.Union[builtins.str, typing.Mapping[builtins.str, typing.Any]],
    ) -> "IResolvable":
        '''
        :param method: -
        :param script: -
        :param input_string: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0bf918016f24f24d6d8d161b6d860b5a0b5506fe4d57b968ce44fea4797441b7)
            check_type(argname="argument method", value=method, expected_type=type_hints["method"])
            check_type(argname="argument script", value=script, expected_type=type_hints["script"])
            check_type(argname="argument input_string", value=input_string, expected_type=type_hints["input_string"])
        return typing.cast("IResolvable", jsii.sinvoke(cls, "jq", [method, script, input_string]))

    @jsii.member(jsii_name="listMerge")
    @builtins.classmethod
    def list_merge(
        cls,
        value_list: typing.Sequence[typing.Sequence[typing.Any]],
    ) -> "IResolvable":
        '''
        :param value_list: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__418ce724afaaaf93016caa6baae8868b58470039ae7a0209173008f801bd0cce)
            check_type(argname="argument value_list", value=value_list, expected_type=type_hints["value_list"])
        return typing.cast("IResolvable", jsii.sinvoke(cls, "listMerge", [value_list]))

    @jsii.member(jsii_name="max")
    @builtins.classmethod
    def max(cls, values: typing.Sequence[jsii.Number]) -> jsii.Number:
        '''
        :param values: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2c2a2d4a102c055ada8b542f1e629eebbdc2c3b23b6ec2f9d3156425c6e0acfe)
            check_type(argname="argument values", value=values, expected_type=type_hints["values"])
        return typing.cast(jsii.Number, jsii.sinvoke(cls, "max", [values]))

    @jsii.member(jsii_name="mergeMapToList")
    @builtins.classmethod
    def merge_map_to_list(
        cls,
        map_list: typing.Sequence[typing.Mapping[builtins.str, typing.Sequence[typing.Any]]],
    ) -> "IResolvable":
        '''
        :param map_list: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__82b64e548b2fe149619ab5ddf83a2692c9fd8f25ee48e660845b06e12306d617)
            check_type(argname="argument map_list", value=map_list, expected_type=type_hints["map_list"])
        return typing.cast("IResolvable", jsii.sinvoke(cls, "mergeMapToList", [map_list]))

    @jsii.member(jsii_name="min")
    @builtins.classmethod
    def min(cls, values: typing.Sequence[jsii.Number]) -> jsii.Number:
        '''
        :param values: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6fc4584dee600015afe6c6649a88dcc4e525cadcf95374eb87929129b2f3ef1c)
            check_type(argname="argument values", value=values, expected_type=type_hints["values"])
        return typing.cast(jsii.Number, jsii.sinvoke(cls, "min", [values]))

    @jsii.member(jsii_name="ref")
    @builtins.classmethod
    def ref(cls, logical_name: builtins.str) -> builtins.str:
        '''The ``Ref`` intrinsic function returns the value of the specified parameter or resource.

        Note that it doesn't validate the logicalName, it mainly serves paremeter/resource reference defined in a ``RosInclude`` template.

        :param logical_name: The logical name of a parameter/resource for which you want to retrieve its value.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5e9634d4ce38e42ffeb12b5d5faf8aa2a239fc7e2f6389ee89c22a433f482341)
            check_type(argname="argument logical_name", value=logical_name, expected_type=type_hints["logical_name"])
        return typing.cast(builtins.str, jsii.sinvoke(cls, "ref", [logical_name]))

    @jsii.member(jsii_name="replace")
    @builtins.classmethod
    def replace(
        cls,
        replace_data: typing.Mapping[builtins.str, typing.Any],
        content: builtins.str,
    ) -> builtins.str:
        '''
        :param replace_data: -
        :param content: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1f093db3c371af0aa55cd98c01151e474879cb90d07575abea0e5cf971413df4)
            check_type(argname="argument replace_data", value=replace_data, expected_type=type_hints["replace_data"])
            check_type(argname="argument content", value=content, expected_type=type_hints["content"])
        return typing.cast(builtins.str, jsii.sinvoke(cls, "replace", [replace_data, content]))

    @jsii.member(jsii_name="select")
    @builtins.classmethod
    def select(
        cls,
        index: typing.Union[builtins.str, jsii.Number],
        array: typing.Any,
    ) -> "IResolvable":
        '''The intrinsic function ``Fn::Select`` returns a single object from a list of objects by index.

        :param index: The index of the object to retrieve. This must be a value from zero to N-1, where N represents the number of elements in the array.
        :param array: The list of objects to select from. This list must not be null, nor can it have null entries.

        :return: a token represented as a string
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9b26926a5816f273496a6351b2085fc2ed9f3fafe5e2353790c65e10563fcf72)
            check_type(argname="argument index", value=index, expected_type=type_hints["index"])
            check_type(argname="argument array", value=array, expected_type=type_hints["array"])
        return typing.cast("IResolvable", jsii.sinvoke(cls, "select", [index, array]))

    @jsii.member(jsii_name="selectMapList")
    @builtins.classmethod
    def select_map_list(
        cls,
        key: builtins.str,
        map_list: typing.Sequence[typing.Mapping[builtins.str, typing.Any]],
    ) -> "IResolvable":
        '''
        :param key: -
        :param map_list: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__14777cebe9bed53e78225c85b1b6b1636e8831c632317c0d9b6cec030eb1e31c)
            check_type(argname="argument key", value=key, expected_type=type_hints["key"])
            check_type(argname="argument map_list", value=map_list, expected_type=type_hints["map_list"])
        return typing.cast("IResolvable", jsii.sinvoke(cls, "selectMapList", [key, map_list]))

    @jsii.member(jsii_name="split")
    @builtins.classmethod
    def split(
        cls,
        delimiter: builtins.str,
        source: builtins.str,
    ) -> typing.List[builtins.str]:
        '''To split a string into a list of string values so that you can select an element from the resulting string list, use the ``Fn::Split`` intrinsic function.

        Specify the location of splits
        with a delimiter, such as , (a comma). After you split a string, use the ``Fn::Select`` function
        to pick a specific element.

        :param delimiter: A string value that determines where the source string is divided.
        :param source: The string value that you want to split.

        :return: a token represented as a string array
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5e40386a7e03a946cc861ea88a3c7bc073d133b957f617719c7c9dc19f966c12)
            check_type(argname="argument delimiter", value=delimiter, expected_type=type_hints["delimiter"])
            check_type(argname="argument source", value=source, expected_type=type_hints["source"])
        return typing.cast(typing.List[builtins.str], jsii.sinvoke(cls, "split", [delimiter, source]))

    @jsii.member(jsii_name="str")
    @builtins.classmethod
    def str(cls, value: typing.Any) -> builtins.str:
        '''
        :param value: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__00895398044099548c609b2ecdc6200196f3347f2b3473fae8a7dd295d6a55dd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        return typing.cast(builtins.str, jsii.sinvoke(cls, "str", [value]))

    @jsii.member(jsii_name="sub")
    @builtins.classmethod
    def sub(
        cls,
        body: builtins.str,
        variables: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
    ) -> builtins.str:
        '''The intrinsic function ``Fn::Sub`` substitutes variables in an input string with values that you specify.

        In your templates, you can use this function
        to construct commands or outputs that include values that aren't available
        until you create or update a stack.

        :param body: A string with variables that Ros Template substitutes with their associated values at runtime. Write variables as ${MyVarName}. Variables can be template parameter names, resource logical IDs, resource attributes, or a variable in a key-value map. If you specify only template parameter names, resource logical IDs, and resource attributes, don't specify a key-value map.
        :param variables: The name of a variable that you included in the String parameter. The value that Ros Template substitutes for the associated variable name at runtime.

        :return: a token represented as a string
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__936318f7d306dbbfa94357c01fc7ea166b43b16cc0756f030d327ffe3a409e5c)
            check_type(argname="argument body", value=body, expected_type=type_hints["body"])
            check_type(argname="argument variables", value=variables, expected_type=type_hints["variables"])
        return typing.cast(builtins.str, jsii.sinvoke(cls, "sub", [body, variables]))


@jsii.interface(jsii_type="@alicloud/ros-cdk-core.IAnyProducer")
class IAnyProducer(typing_extensions.Protocol):
    '''Interface for lazy untyped value producers.'''

    @jsii.member(jsii_name="produce")
    def produce(self, context: "IResolveContext") -> typing.Any:
        '''Produce the value.

        :param context: -
        '''
        ...


class _IAnyProducerProxy:
    '''Interface for lazy untyped value producers.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-core.IAnyProducer"

    @jsii.member(jsii_name="produce")
    def produce(self, context: "IResolveContext") -> typing.Any:
        '''Produce the value.

        :param context: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c17c877cbc31bd56fc0d0ada8af1359356a47e367984086f30dbdd1e8909805d)
            check_type(argname="argument context", value=context, expected_type=type_hints["context"])
        return typing.cast(typing.Any, jsii.invoke(self, "produce", [context]))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IAnyProducer).__jsii_proxy_class__ = lambda : _IAnyProducerProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-core.IDependable")
class IDependable(typing_extensions.Protocol):
    '''Trait marker for classes that can be depended upon.

    The presence of this interface indicates that an object has
    an ``IDependableTrait`` implementation.

    This interface can be used to take an (ordering) dependency on a set of
    constructs. An ordering dependency implies that the resources represented by
    those constructs are deployed before the resources depending ON them are
    deployed.
    '''

    pass


class _IDependableProxy:
    '''Trait marker for classes that can be depended upon.

    The presence of this interface indicates that an object has
    an ``IDependableTrait`` implementation.

    This interface can be used to take an (ordering) dependency on a set of
    constructs. An ordering dependency implies that the resources represented by
    those constructs are deployed before the resources depending ON them are
    deployed.
    '''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-core.IDependable"
    pass

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IDependable).__jsii_proxy_class__ = lambda : _IDependableProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-core.IFragmentConcatenator")
class IFragmentConcatenator(typing_extensions.Protocol):
    '''(experimental) Function used to concatenate symbols in the target document language.

    Interface so it could potentially be exposed over jsii.

    :stability: experimental
    '''

    @jsii.member(jsii_name="join")
    def join(self, left: typing.Any, right: typing.Any) -> typing.Any:
        '''(experimental) Join the fragment on the left and on the right.

        :param left: -
        :param right: -

        :stability: experimental
        '''
        ...


class _IFragmentConcatenatorProxy:
    '''(experimental) Function used to concatenate symbols in the target document language.

    Interface so it could potentially be exposed over jsii.

    :stability: experimental
    '''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-core.IFragmentConcatenator"

    @jsii.member(jsii_name="join")
    def join(self, left: typing.Any, right: typing.Any) -> typing.Any:
        '''(experimental) Join the fragment on the left and on the right.

        :param left: -
        :param right: -

        :stability: experimental
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0c52de30a7fb0655b01843c16a129e0a7eebacf9016fd797efec15cd3678577a)
            check_type(argname="argument left", value=left, expected_type=type_hints["left"])
            check_type(argname="argument right", value=right, expected_type=type_hints["right"])
        return typing.cast(typing.Any, jsii.invoke(self, "join", [left, right]))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IFragmentConcatenator).__jsii_proxy_class__ = lambda : _IFragmentConcatenatorProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-core.IInspectable")
class IInspectable(typing_extensions.Protocol):
    '''Interface for examining a construct and exposing metadata.'''

    @jsii.member(jsii_name="inspect")
    def inspect(self, inspector: "TreeInspector") -> None:
        '''Examines construct.

        :param inspector: - tree inspector to collect and process attributes.
        '''
        ...


class _IInspectableProxy:
    '''Interface for examining a construct and exposing metadata.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-core.IInspectable"

    @jsii.member(jsii_name="inspect")
    def inspect(self, inspector: "TreeInspector") -> None:
        '''Examines construct.

        :param inspector: - tree inspector to collect and process attributes.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1465a36c9a263cd138c4c560a149095fbdfecd574cfbe3422439e98c3fbdf2ed)
            check_type(argname="argument inspector", value=inspector, expected_type=type_hints["inspector"])
        return typing.cast(None, jsii.invoke(self, "inspect", [inspector]))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IInspectable).__jsii_proxy_class__ = lambda : _IInspectableProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-core.IListProducer")
class IListProducer(typing_extensions.Protocol):
    '''Interface for lazy list producers.'''

    @jsii.member(jsii_name="produce")
    def produce(
        self,
        context: "IResolveContext",
    ) -> typing.Optional[typing.List[builtins.str]]:
        '''Produce the list value.

        :param context: -
        '''
        ...


class _IListProducerProxy:
    '''Interface for lazy list producers.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-core.IListProducer"

    @jsii.member(jsii_name="produce")
    def produce(
        self,
        context: "IResolveContext",
    ) -> typing.Optional[typing.List[builtins.str]]:
        '''Produce the list value.

        :param context: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__767ea28bc08d47b0e1f0d4765fe0bc3f22c8289fee8b2e194da7d57277824f5a)
            check_type(argname="argument context", value=context, expected_type=type_hints["context"])
        return typing.cast(typing.Optional[typing.List[builtins.str]], jsii.invoke(self, "produce", [context]))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IListProducer).__jsii_proxy_class__ = lambda : _IListProducerProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-core.INumberProducer")
class INumberProducer(typing_extensions.Protocol):
    '''Interface for lazy number producers.'''

    @jsii.member(jsii_name="produce")
    def produce(self, context: "IResolveContext") -> typing.Optional[jsii.Number]:
        '''Produce the number value.

        :param context: -
        '''
        ...


class _INumberProducerProxy:
    '''Interface for lazy number producers.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-core.INumberProducer"

    @jsii.member(jsii_name="produce")
    def produce(self, context: "IResolveContext") -> typing.Optional[jsii.Number]:
        '''Produce the number value.

        :param context: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0831a2456f0182fa20ecb7b158e0a1186592cd9b986aa74ba61a4a4d1bbc0611)
            check_type(argname="argument context", value=context, expected_type=type_hints["context"])
        return typing.cast(typing.Optional[jsii.Number], jsii.invoke(self, "produce", [context]))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, INumberProducer).__jsii_proxy_class__ = lambda : _INumberProducerProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-core.IPostProcessor")
class IPostProcessor(typing_extensions.Protocol):
    '''A Token that can post-process the complete resolved value, after resolve() has recursed over it.'''

    @jsii.member(jsii_name="postProcess")
    def post_process(self, input: typing.Any, context: "IResolveContext") -> typing.Any:
        '''Process the completely resolved value, after full recursion/resolution has happened.

        :param input: -
        :param context: -
        '''
        ...


class _IPostProcessorProxy:
    '''A Token that can post-process the complete resolved value, after resolve() has recursed over it.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-core.IPostProcessor"

    @jsii.member(jsii_name="postProcess")
    def post_process(self, input: typing.Any, context: "IResolveContext") -> typing.Any:
        '''Process the completely resolved value, after full recursion/resolution has happened.

        :param input: -
        :param context: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__15f5bff2f879cc4cc32197c0039cad4b57418edeed34a996ca4874cf726ea5d4)
            check_type(argname="argument input", value=input, expected_type=type_hints["input"])
            check_type(argname="argument context", value=context, expected_type=type_hints["context"])
        return typing.cast(typing.Any, jsii.invoke(self, "postProcess", [input, context]))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IPostProcessor).__jsii_proxy_class__ = lambda : _IPostProcessorProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-core.IResolvable")
class IResolvable(typing_extensions.Protocol):
    '''Interface for values that can be resolvable later.

    Tokens are special objects that participate in synthesis.
    '''

    @builtins.property
    @jsii.member(jsii_name="creationStack")
    def creation_stack(self) -> typing.List[builtins.str]:
        '''The creation stack of this resolvable which will be appended to errors thrown during resolution.

        If this returns an empty array the stack will not be attached.
        '''
        ...

    @jsii.member(jsii_name="resolve")
    def resolve(self, context: "IResolveContext") -> typing.Any:
        '''Produce the Token's value at resolution time.

        :param context: -
        '''
        ...

    @jsii.member(jsii_name="toString")
    def to_string(self) -> builtins.str:
        '''Return a string representation of this resolvable object.

        Returns a reversible string representation.
        '''
        ...


class _IResolvableProxy:
    '''Interface for values that can be resolvable later.

    Tokens are special objects that participate in synthesis.
    '''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-core.IResolvable"

    @builtins.property
    @jsii.member(jsii_name="creationStack")
    def creation_stack(self) -> typing.List[builtins.str]:
        '''The creation stack of this resolvable which will be appended to errors thrown during resolution.

        If this returns an empty array the stack will not be attached.
        '''
        return typing.cast(typing.List[builtins.str], jsii.get(self, "creationStack"))

    @jsii.member(jsii_name="resolve")
    def resolve(self, context: "IResolveContext") -> typing.Any:
        '''Produce the Token's value at resolution time.

        :param context: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0955aa64060a165ec5f774d258aa1859e4c9a08ded723ede00b5c1bdc9df52b3)
            check_type(argname="argument context", value=context, expected_type=type_hints["context"])
        return typing.cast(typing.Any, jsii.invoke(self, "resolve", [context]))

    @jsii.member(jsii_name="toString")
    def to_string(self) -> builtins.str:
        '''Return a string representation of this resolvable object.

        Returns a reversible string representation.
        '''
        return typing.cast(builtins.str, jsii.invoke(self, "toString", []))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IResolvable).__jsii_proxy_class__ = lambda : _IResolvableProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-core.IResolveContext")
class IResolveContext(typing_extensions.Protocol):
    '''Current resolution context for tokens.'''

    @builtins.property
    @jsii.member(jsii_name="preparing")
    def preparing(self) -> builtins.bool:
        '''True when we are still preparing, false if we're rendering the final output.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="scope")
    def scope(self) -> "IConstruct":
        '''The scope from which resolution has been initiated.'''
        ...

    @jsii.member(jsii_name="registerPostProcessor")
    def register_post_processor(self, post_processor: IPostProcessor) -> None:
        '''Use this postprocessor after the entire token structure has been resolved.

        :param post_processor: -
        '''
        ...

    @jsii.member(jsii_name="resolve")
    def resolve(self, x: typing.Any) -> typing.Any:
        '''Resolve an inner object.

        :param x: -
        '''
        ...


class _IResolveContextProxy:
    '''Current resolution context for tokens.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-core.IResolveContext"

    @builtins.property
    @jsii.member(jsii_name="preparing")
    def preparing(self) -> builtins.bool:
        '''True when we are still preparing, false if we're rendering the final output.'''
        return typing.cast(builtins.bool, jsii.get(self, "preparing"))

    @builtins.property
    @jsii.member(jsii_name="scope")
    def scope(self) -> "IConstruct":
        '''The scope from which resolution has been initiated.'''
        return typing.cast("IConstruct", jsii.get(self, "scope"))

    @jsii.member(jsii_name="registerPostProcessor")
    def register_post_processor(self, post_processor: IPostProcessor) -> None:
        '''Use this postprocessor after the entire token structure has been resolved.

        :param post_processor: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__015447ccb4a9906395b20fd902cabcd4597a590171c08295f278be5342f4e7e3)
            check_type(argname="argument post_processor", value=post_processor, expected_type=type_hints["post_processor"])
        return typing.cast(None, jsii.invoke(self, "registerPostProcessor", [post_processor]))

    @jsii.member(jsii_name="resolve")
    def resolve(self, x: typing.Any) -> typing.Any:
        '''Resolve an inner object.

        :param x: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__20944a7cc00f2136f1d3365c36cfc599ebe106e8d4cdddf174ebbd715657933c)
            check_type(argname="argument x", value=x, expected_type=type_hints["x"])
        return typing.cast(typing.Any, jsii.invoke(self, "resolve", [x]))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IResolveContext).__jsii_proxy_class__ = lambda : _IResolveContextProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-core.IRosConditionExpression")
class IRosConditionExpression(IResolvable, typing_extensions.Protocol):
    '''Represents a RosTemplate element that can be used within a Condition.

    You can use intrinsic functions, such as ``Fn.conditionIf``,
    ``Fn.conditionEquals``, and ``Fn.conditionNot``, to conditionally create
    stack resources. These conditions are evaluated based on input parameters
    that you declare when you create or update a stack. After you define all your
    conditions, you can associate them with resources or resource properties in
    the Resources and Outputs sections of a template.
    '''

    pass


class _IRosConditionExpressionProxy(
    jsii.proxy_for(IResolvable), # type: ignore[misc]
):
    '''Represents a RosTemplate element that can be used within a Condition.

    You can use intrinsic functions, such as ``Fn.conditionIf``,
    ``Fn.conditionEquals``, and ``Fn.conditionNot``, to conditionally create
    stack resources. These conditions are evaluated based on input parameters
    that you declare when you create or update a stack. After you define all your
    conditions, you can associate them with resources or resource properties in
    the Resources and Outputs sections of a template.
    '''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-core.IRosConditionExpression"
    pass

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IRosConditionExpression).__jsii_proxy_class__ = lambda : _IRosConditionExpressionProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-core.IRosResourceOptions")
class IRosResourceOptions(typing_extensions.Protocol):
    @builtins.property
    @jsii.member(jsii_name="condition")
    def condition(self) -> typing.Optional["RosCondition"]:
        '''A condition to associate with this resource.

        This means that only if the condition evaluates to 'true' when the stack
        is deployed, the resource will be included. This is provided to allow CDK projects to produce legacy templates, but noramlly
        there is no need to use it in CDK projects.
        '''
        ...

    @condition.setter
    def condition(self, value: typing.Optional["RosCondition"]) -> None:
        ...

    @builtins.property
    @jsii.member(jsii_name="count")
    def count(self) -> typing.Optional[typing.Union[jsii.Number, IResolvable]]:
        ...

    @count.setter
    def count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, IResolvable]],
    ) -> None:
        ...

    @builtins.property
    @jsii.member(jsii_name="deletionPolicy")
    def deletion_policy(self) -> typing.Optional["RosDeletionPolicy"]:
        '''With the DeletionPolicy attribute you can preserve or (in some cases) backup a resource when its stack is deleted.

        You specify a DeletionPolicy attribute for each resource that you want to control. If a resource has no DeletionPolicy
        attribute, ROS deletes the resource by default. Note that this capability also applies to update operations
        that lead to resources being removed.
        '''
        ...

    @deletion_policy.setter
    def deletion_policy(self, value: typing.Optional["RosDeletionPolicy"]) -> None:
        ...

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        ...

    @description.setter
    def description(self, value: typing.Optional[builtins.str]) -> None:
        ...

    @builtins.property
    @jsii.member(jsii_name="metadata")
    def metadata(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''Metadata associated with the ROS resource.

        This is not the same as the construct metadata which can be added
        using construct.addMetadata(), but would not appear in the ROS template automatically.
        '''
        ...

    @metadata.setter
    def metadata(
        self,
        value: typing.Optional[typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        ...


class _IRosResourceOptionsProxy:
    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-core.IRosResourceOptions"

    @builtins.property
    @jsii.member(jsii_name="condition")
    def condition(self) -> typing.Optional["RosCondition"]:
        '''A condition to associate with this resource.

        This means that only if the condition evaluates to 'true' when the stack
        is deployed, the resource will be included. This is provided to allow CDK projects to produce legacy templates, but noramlly
        there is no need to use it in CDK projects.
        '''
        return typing.cast(typing.Optional["RosCondition"], jsii.get(self, "condition"))

    @condition.setter
    def condition(self, value: typing.Optional["RosCondition"]) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6b9af138a0065ab24db0137ba4df5cee7e42b723f07b919cba01deb86f6721d1)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "condition", value)

    @builtins.property
    @jsii.member(jsii_name="count")
    def count(self) -> typing.Optional[typing.Union[jsii.Number, IResolvable]]:
        return typing.cast(typing.Optional[typing.Union[jsii.Number, IResolvable]], jsii.get(self, "count"))

    @count.setter
    def count(
        self,
        value: typing.Optional[typing.Union[jsii.Number, IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__19ccbf023e632728666a7277d8c6574e3cf45a8648865fbe9b2af9d1ae076fb7)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "count", value)

    @builtins.property
    @jsii.member(jsii_name="deletionPolicy")
    def deletion_policy(self) -> typing.Optional["RosDeletionPolicy"]:
        '''With the DeletionPolicy attribute you can preserve or (in some cases) backup a resource when its stack is deleted.

        You specify a DeletionPolicy attribute for each resource that you want to control. If a resource has no DeletionPolicy
        attribute, ROS deletes the resource by default. Note that this capability also applies to update operations
        that lead to resources being removed.
        '''
        return typing.cast(typing.Optional["RosDeletionPolicy"], jsii.get(self, "deletionPolicy"))

    @deletion_policy.setter
    def deletion_policy(self, value: typing.Optional["RosDeletionPolicy"]) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f1cddf5277a3c64108ce0c15fa5faa290e10d8d379815c3af84baaccfc3808ac)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "deletionPolicy", value)

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        return typing.cast(typing.Optional[builtins.str], jsii.get(self, "description"))

    @description.setter
    def description(self, value: typing.Optional[builtins.str]) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__35f4c58d13e139e5c6223bdbf53164654b2095b5fd91c1bf7e993bd3dc84140f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="metadata")
    def metadata(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''Metadata associated with the ROS resource.

        This is not the same as the construct metadata which can be added
        using construct.addMetadata(), but would not appear in the ROS template automatically.
        '''
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], jsii.get(self, "metadata"))

    @metadata.setter
    def metadata(
        self,
        value: typing.Optional[typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__71a66b9935f95fe5d4e4f70341aa002ed47fa3648ffbbe393e5120f0f1087c43)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "metadata", value)

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IRosResourceOptions).__jsii_proxy_class__ = lambda : _IRosResourceOptionsProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-core.IStackSynthesizer")
class IStackSynthesizer(typing_extensions.Protocol):
    '''Encodes information how a certain Stack should be deployed.'''

    @jsii.member(jsii_name="bind")
    def bind(self, stack: "Stack") -> None:
        '''Bind to the stack this environment is going to be used on.

        Must be called before any of the other methods are called.

        :param stack: -
        '''
        ...

    @jsii.member(jsii_name="synthesizeStackArtifacts")
    def synthesize_stack_artifacts(self, session: "ISynthesisSession") -> None:
        '''(experimental) Synthesize all artifacts required for the stack into the session.

        :param session: -

        :stability: experimental
        '''
        ...


class _IStackSynthesizerProxy:
    '''Encodes information how a certain Stack should be deployed.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-core.IStackSynthesizer"

    @jsii.member(jsii_name="bind")
    def bind(self, stack: "Stack") -> None:
        '''Bind to the stack this environment is going to be used on.

        Must be called before any of the other methods are called.

        :param stack: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4a06319e966e22b6794f594e79b9622c69452df8b350eb1db66803917ce61c9c)
            check_type(argname="argument stack", value=stack, expected_type=type_hints["stack"])
        return typing.cast(None, jsii.invoke(self, "bind", [stack]))

    @jsii.member(jsii_name="synthesizeStackArtifacts")
    def synthesize_stack_artifacts(self, session: "ISynthesisSession") -> None:
        '''(experimental) Synthesize all artifacts required for the stack into the session.

        :param session: -

        :stability: experimental
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__51447d13933e5456a4c6300399eb55ac5df14f92fa88bc9f6722990b9f25fe80)
            check_type(argname="argument session", value=session, expected_type=type_hints["session"])
        return typing.cast(None, jsii.invoke(self, "synthesizeStackArtifacts", [session]))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IStackSynthesizer).__jsii_proxy_class__ = lambda : _IStackSynthesizerProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-core.IStringProducer")
class IStringProducer(typing_extensions.Protocol):
    '''Interface for lazy string producers.'''

    @jsii.member(jsii_name="produce")
    def produce(self, context: IResolveContext) -> typing.Optional[builtins.str]:
        '''Produce the string value.

        :param context: -
        '''
        ...


class _IStringProducerProxy:
    '''Interface for lazy string producers.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-core.IStringProducer"

    @jsii.member(jsii_name="produce")
    def produce(self, context: IResolveContext) -> typing.Optional[builtins.str]:
        '''Produce the string value.

        :param context: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4459cd8f8716a48963ca392c9ef233a3a6f41bb3af29ad7cc2c41f450aa8713d)
            check_type(argname="argument context", value=context, expected_type=type_hints["context"])
        return typing.cast(typing.Optional[builtins.str], jsii.invoke(self, "produce", [context]))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IStringProducer).__jsii_proxy_class__ = lambda : _IStringProducerProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-core.ISynthesisSession")
class ISynthesisSession(typing_extensions.Protocol):
    '''Represents a single session of synthesis.

    Passed into ``Construct.synthesize()`` methods.
    '''

    @builtins.property
    @jsii.member(jsii_name="assembly")
    def assembly(self) -> _ros_cdk_cxapi_45dace6b.CloudAssemblyBuilder:
        '''Cloud assembly builder.'''
        ...

    @assembly.setter
    def assembly(self, value: _ros_cdk_cxapi_45dace6b.CloudAssemblyBuilder) -> None:
        ...

    @builtins.property
    @jsii.member(jsii_name="outdir")
    def outdir(self) -> builtins.str:
        '''The output directory for this synthesis session.'''
        ...

    @outdir.setter
    def outdir(self, value: builtins.str) -> None:
        ...


class _ISynthesisSessionProxy:
    '''Represents a single session of synthesis.

    Passed into ``Construct.synthesize()`` methods.
    '''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-core.ISynthesisSession"

    @builtins.property
    @jsii.member(jsii_name="assembly")
    def assembly(self) -> _ros_cdk_cxapi_45dace6b.CloudAssemblyBuilder:
        '''Cloud assembly builder.'''
        return typing.cast(_ros_cdk_cxapi_45dace6b.CloudAssemblyBuilder, jsii.get(self, "assembly"))

    @assembly.setter
    def assembly(self, value: _ros_cdk_cxapi_45dace6b.CloudAssemblyBuilder) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1c1cff4576a8245902913886959c7001a767c437b52225234ea1b9baf6a9e05d)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "assembly", value)

    @builtins.property
    @jsii.member(jsii_name="outdir")
    def outdir(self) -> builtins.str:
        '''The output directory for this synthesis session.'''
        return typing.cast(builtins.str, jsii.get(self, "outdir"))

    @outdir.setter
    def outdir(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d2762b383cd1433befe9d900f9538105bc7ff724b6f3bd94e9babdde6b6b651f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "outdir", value)

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ISynthesisSession).__jsii_proxy_class__ = lambda : _ISynthesisSessionProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-core.ITaggable")
class ITaggable(typing_extensions.Protocol):
    '''Interface to implement tags.'''

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> "TagManager":
        '''TagManager to set, remove and format tags.'''
        ...


class _ITaggableProxy:
    '''Interface to implement tags.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-core.ITaggable"

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> "TagManager":
        '''TagManager to set, remove and format tags.'''
        return typing.cast("TagManager", jsii.get(self, "tags"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ITaggable).__jsii_proxy_class__ = lambda : _ITaggableProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-core.ITemplateOptions")
class ITemplateOptions(typing_extensions.Protocol):
    '''ROS template options for a stack.'''

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        '''Gets or sets the description of this stack.

        If provided, it will be included in the ROS template's "Description" attribute.
        '''
        ...

    @description.setter
    def description(self, value: typing.Optional[builtins.str]) -> None:
        ...

    @builtins.property
    @jsii.member(jsii_name="metadata")
    def metadata(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''Metadata associated with the ROS template.'''
        ...

    @metadata.setter
    def metadata(
        self,
        value: typing.Optional[typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        ...


class _ITemplateOptionsProxy:
    '''ROS template options for a stack.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-core.ITemplateOptions"

    @builtins.property
    @jsii.member(jsii_name="description")
    def description(self) -> typing.Optional[builtins.str]:
        '''Gets or sets the description of this stack.

        If provided, it will be included in the ROS template's "Description" attribute.
        '''
        return typing.cast(typing.Optional[builtins.str], jsii.get(self, "description"))

    @description.setter
    def description(self, value: typing.Optional[builtins.str]) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__014ac8e6afd23cc5d8dbaa362ea76b16a5188f58d5d520c3fb9b08768d065850)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "description", value)

    @builtins.property
    @jsii.member(jsii_name="metadata")
    def metadata(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''Metadata associated with the ROS template.'''
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], jsii.get(self, "metadata"))

    @metadata.setter
    def metadata(
        self,
        value: typing.Optional[typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bcca51c7205afe0a4756cb9a5de79e6efe34349870e4aaee85d9de6f3b426dbb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "metadata", value)

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ITemplateOptions).__jsii_proxy_class__ = lambda : _ITemplateOptionsProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-core.ITokenMapper")
class ITokenMapper(typing_extensions.Protocol):
    '''Interface to apply operation to tokens in a string.

    Interface so it can be exported via jsii.
    '''

    @jsii.member(jsii_name="mapToken")
    def map_token(self, t: IResolvable) -> typing.Any:
        '''Replace a single token.

        :param t: -
        '''
        ...


class _ITokenMapperProxy:
    '''Interface to apply operation to tokens in a string.

    Interface so it can be exported via jsii.
    '''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-core.ITokenMapper"

    @jsii.member(jsii_name="mapToken")
    def map_token(self, t: IResolvable) -> typing.Any:
        '''Replace a single token.

        :param t: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__06428b1b28ed30f0c1384a6d5a13aa09e69ba4094155ef9bff2074261f64bc85)
            check_type(argname="argument t", value=t, expected_type=type_hints["t"])
        return typing.cast(typing.Any, jsii.invoke(self, "mapToken", [t]))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ITokenMapper).__jsii_proxy_class__ = lambda : _ITokenMapperProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-core.ITokenResolver")
class ITokenResolver(typing_extensions.Protocol):
    '''How to resolve tokens.'''

    @jsii.member(jsii_name="resolveList")
    def resolve_list(
        self,
        l: typing.Sequence[builtins.str],
        context: IResolveContext,
    ) -> typing.Any:
        '''Resolve a tokenized list.

        :param l: -
        :param context: -
        '''
        ...

    @jsii.member(jsii_name="resolveString")
    def resolve_string(
        self,
        s: "TokenizedStringFragments",
        context: IResolveContext,
    ) -> typing.Any:
        '''Resolve a string with at least one stringified token in it.

        (May use concatenation)

        :param s: -
        :param context: -
        '''
        ...

    @jsii.member(jsii_name="resolveToken")
    def resolve_token(
        self,
        t: IResolvable,
        context: IResolveContext,
        post_processor: IPostProcessor,
    ) -> typing.Any:
        '''Resolve a single token.

        :param t: -
        :param context: -
        :param post_processor: -
        '''
        ...


class _ITokenResolverProxy:
    '''How to resolve tokens.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-core.ITokenResolver"

    @jsii.member(jsii_name="resolveList")
    def resolve_list(
        self,
        l: typing.Sequence[builtins.str],
        context: IResolveContext,
    ) -> typing.Any:
        '''Resolve a tokenized list.

        :param l: -
        :param context: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6e2496293c1d52f1d1a1d7cb90d199bc2d95c0efc70ec58bef81c5e92e78c6c2)
            check_type(argname="argument l", value=l, expected_type=type_hints["l"])
            check_type(argname="argument context", value=context, expected_type=type_hints["context"])
        return typing.cast(typing.Any, jsii.invoke(self, "resolveList", [l, context]))

    @jsii.member(jsii_name="resolveString")
    def resolve_string(
        self,
        s: "TokenizedStringFragments",
        context: IResolveContext,
    ) -> typing.Any:
        '''Resolve a string with at least one stringified token in it.

        (May use concatenation)

        :param s: -
        :param context: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ec6d2795c1854413fd11b04f75ac05db5d3e9ebda3e0c44fd5c5519a148c471f)
            check_type(argname="argument s", value=s, expected_type=type_hints["s"])
            check_type(argname="argument context", value=context, expected_type=type_hints["context"])
        return typing.cast(typing.Any, jsii.invoke(self, "resolveString", [s, context]))

    @jsii.member(jsii_name="resolveToken")
    def resolve_token(
        self,
        t: IResolvable,
        context: IResolveContext,
        post_processor: IPostProcessor,
    ) -> typing.Any:
        '''Resolve a single token.

        :param t: -
        :param context: -
        :param post_processor: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b83a71c854922c76207ee3305ff734b2f1aaa0a7a12636de23ff86f45b756041)
            check_type(argname="argument t", value=t, expected_type=type_hints["t"])
            check_type(argname="argument context", value=context, expected_type=type_hints["context"])
            check_type(argname="argument post_processor", value=post_processor, expected_type=type_hints["post_processor"])
        return typing.cast(typing.Any, jsii.invoke(self, "resolveToken", [t, context, post_processor]))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, ITokenResolver).__jsii_proxy_class__ = lambda : _ITokenResolverProxy


@jsii.implements(IResolvable)
class Intrinsic(metaclass=jsii.JSIIMeta, jsii_type="@alicloud/ros-cdk-core.Intrinsic"):
    '''(experimental) Token subclass that represents values intrinsic to the target document language.

    This class will disappear in a future release and should not be used.

    :stability: experimental
    '''

    def __init__(self, value: typing.Any) -> None:
        '''
        :param value: -

        :stability: experimental
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f690835f92182062a506fffc4e9d3275914ee37a6eb328a1e03037ac62192123)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.create(self.__class__, self, [value])

    @jsii.member(jsii_name="newError")
    def _new_error(self, message: builtins.str) -> typing.Any:
        '''(experimental) Creates a throwable Error object that contains the token creation stack trace.

        :param message: Error message.

        :stability: experimental
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a9d6cb405f1dc003d11ded0e2fcf4924af28d4bb81a501991a861ccc28b25294)
            check_type(argname="argument message", value=message, expected_type=type_hints["message"])
        return typing.cast(typing.Any, jsii.invoke(self, "newError", [message]))

    @jsii.member(jsii_name="resolve")
    def resolve(self, _context: IResolveContext) -> typing.Any:
        '''(experimental) Produce the Token's value at resolution time.

        :param _context: -

        :stability: experimental
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6ed11c272182745b8f071c64a59933a914b55021a02f39aebbbdaed7955fcf4a)
            check_type(argname="argument _context", value=_context, expected_type=type_hints["_context"])
        return typing.cast(typing.Any, jsii.invoke(self, "resolve", [_context]))

    @jsii.member(jsii_name="toJSON")
    def to_json(self) -> typing.Any:
        '''(experimental) Turn this Token into JSON.

        Called automatically when JSON.stringify() is called on a Token.

        :stability: experimental
        '''
        return typing.cast(typing.Any, jsii.invoke(self, "toJSON", []))

    @jsii.member(jsii_name="toString")
    def to_string(self) -> builtins.str:
        '''(experimental) Convert an instance of this Token to a string.

        This method will be called implicitly by language runtimes if the object
        is embedded into a string. We treat it the same as an explicit
        stringification.

        :stability: experimental
        '''
        return typing.cast(builtins.str, jsii.invoke(self, "toString", []))

    @builtins.property
    @jsii.member(jsii_name="creationStack")
    def creation_stack(self) -> typing.List[builtins.str]:
        '''(experimental) The captured stack trace which represents the location in which this token was created.

        :stability: experimental
        '''
        return typing.cast(typing.List[builtins.str], jsii.get(self, "creationStack"))


class Lazy(metaclass=jsii.JSIIMeta, jsii_type="@alicloud/ros-cdk-core.Lazy"):
    '''Lazily produce a value.

    Can be used to return a string, list or numeric value whose actual value
    will only be calculated later, during synthesis.
    '''

    @jsii.member(jsii_name="anyValue")
    @builtins.classmethod
    def any_value(
        cls,
        producer: IAnyProducer,
        *,
        display_hint: typing.Optional[builtins.str] = None,
        omit_empty_array: typing.Optional[builtins.bool] = None,
    ) -> IResolvable:
        '''
        :param producer: -
        :param display_hint: Use the given name as a display hint. Default: - No hint
        :param omit_empty_array: If the produced value is an array and it is empty, return 'undefined' instead. Default: false
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__855c3b8f704d5568c58b5eaf5256d1f96e8973533df785d2287a1fa17f8e0625)
            check_type(argname="argument producer", value=producer, expected_type=type_hints["producer"])
        options = LazyAnyValueOptions(
            display_hint=display_hint, omit_empty_array=omit_empty_array
        )

        return typing.cast(IResolvable, jsii.sinvoke(cls, "anyValue", [producer, options]))

    @jsii.member(jsii_name="listValue")
    @builtins.classmethod
    def list_value(
        cls,
        producer: IListProducer,
        *,
        display_hint: typing.Optional[builtins.str] = None,
        omit_empty: typing.Optional[builtins.bool] = None,
    ) -> typing.List[builtins.str]:
        '''
        :param producer: -
        :param display_hint: Use the given name as a display hint. Default: - No hint
        :param omit_empty: If the produced list is empty, return 'undefined' instead. Default: false
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9d27bdcb87429f6c1ad1c6a63e4fa7f37ec6b156995dd935db8c0232ba62cfb1)
            check_type(argname="argument producer", value=producer, expected_type=type_hints["producer"])
        options = LazyListValueOptions(
            display_hint=display_hint, omit_empty=omit_empty
        )

        return typing.cast(typing.List[builtins.str], jsii.sinvoke(cls, "listValue", [producer, options]))

    @jsii.member(jsii_name="numberValue")
    @builtins.classmethod
    def number_value(cls, producer: INumberProducer) -> jsii.Number:
        '''
        :param producer: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__eb3d27bb92f07376c0671ce2a29b9e0322a5e620e9e5d9261fcc112c7dd83880)
            check_type(argname="argument producer", value=producer, expected_type=type_hints["producer"])
        return typing.cast(jsii.Number, jsii.sinvoke(cls, "numberValue", [producer]))

    @jsii.member(jsii_name="stringValue")
    @builtins.classmethod
    def string_value(
        cls,
        producer: IStringProducer,
        *,
        display_hint: typing.Optional[builtins.str] = None,
    ) -> builtins.str:
        '''
        :param producer: -
        :param display_hint: Use the given name as a display hint. Default: - No hint
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f6b154666a2f7bd28fa1944715b8f57b93cf5a42b94aa1cc51b4c287075e2e6f)
            check_type(argname="argument producer", value=producer, expected_type=type_hints["producer"])
        options = LazyStringValueOptions(display_hint=display_hint)

        return typing.cast(builtins.str, jsii.sinvoke(cls, "stringValue", [producer, options]))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.LazyAnyValueOptions",
    jsii_struct_bases=[],
    name_mapping={"display_hint": "displayHint", "omit_empty_array": "omitEmptyArray"},
)
class LazyAnyValueOptions:
    def __init__(
        self,
        *,
        display_hint: typing.Optional[builtins.str] = None,
        omit_empty_array: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Options for creating lazy untyped tokens.

        :param display_hint: Use the given name as a display hint. Default: - No hint
        :param omit_empty_array: If the produced value is an array and it is empty, return 'undefined' instead. Default: false
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__459da39148795d4a2ffdb32575cd274897146155c51dea7f0361cb43373e04b7)
            check_type(argname="argument display_hint", value=display_hint, expected_type=type_hints["display_hint"])
            check_type(argname="argument omit_empty_array", value=omit_empty_array, expected_type=type_hints["omit_empty_array"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if display_hint is not None:
            self._values["display_hint"] = display_hint
        if omit_empty_array is not None:
            self._values["omit_empty_array"] = omit_empty_array

    @builtins.property
    def display_hint(self) -> typing.Optional[builtins.str]:
        '''Use the given name as a display hint.

        :default: - No hint
        '''
        result = self._values.get("display_hint")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def omit_empty_array(self) -> typing.Optional[builtins.bool]:
        '''If the produced value is an array and it is empty, return 'undefined' instead.

        :default: false
        '''
        result = self._values.get("omit_empty_array")
        return typing.cast(typing.Optional[builtins.bool], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "LazyAnyValueOptions(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.LazyListValueOptions",
    jsii_struct_bases=[],
    name_mapping={"display_hint": "displayHint", "omit_empty": "omitEmpty"},
)
class LazyListValueOptions:
    def __init__(
        self,
        *,
        display_hint: typing.Optional[builtins.str] = None,
        omit_empty: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Options for creating a lazy list token.

        :param display_hint: Use the given name as a display hint. Default: - No hint
        :param omit_empty: If the produced list is empty, return 'undefined' instead. Default: false
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f43363319a77742c2083fd9d84db3926afdc535ad84dd79e943bb24b761be25d)
            check_type(argname="argument display_hint", value=display_hint, expected_type=type_hints["display_hint"])
            check_type(argname="argument omit_empty", value=omit_empty, expected_type=type_hints["omit_empty"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if display_hint is not None:
            self._values["display_hint"] = display_hint
        if omit_empty is not None:
            self._values["omit_empty"] = omit_empty

    @builtins.property
    def display_hint(self) -> typing.Optional[builtins.str]:
        '''Use the given name as a display hint.

        :default: - No hint
        '''
        result = self._values.get("display_hint")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def omit_empty(self) -> typing.Optional[builtins.bool]:
        '''If the produced list is empty, return 'undefined' instead.

        :default: false
        '''
        result = self._values.get("omit_empty")
        return typing.cast(typing.Optional[builtins.bool], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "LazyListValueOptions(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.LazyStringValueOptions",
    jsii_struct_bases=[],
    name_mapping={"display_hint": "displayHint"},
)
class LazyStringValueOptions:
    def __init__(self, *, display_hint: typing.Optional[builtins.str] = None) -> None:
        '''Options for creating a lazy string token.

        :param display_hint: Use the given name as a display hint. Default: - No hint
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__11154e9acb99e91fe8a38a92330e2004810b345c011269ed4ae3381d938718d9)
            check_type(argname="argument display_hint", value=display_hint, expected_type=type_hints["display_hint"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if display_hint is not None:
            self._values["display_hint"] = display_hint

    @builtins.property
    def display_hint(self) -> typing.Optional[builtins.str]:
        '''Use the given name as a display hint.

        :default: - No hint
        '''
        result = self._values.get("display_hint")
        return typing.cast(typing.Optional[builtins.str], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "LazyStringValueOptions(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.NestedStackProps",
    jsii_struct_bases=[],
    name_mapping={
        "parameters": "parameters",
        "template_body": "templateBody",
        "template_url": "templateUrl",
        "timeout": "timeout",
    },
)
class NestedStackProps:
    def __init__(
        self,
        *,
        parameters: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        template_body: typing.Optional[builtins.str] = None,
        template_url: typing.Optional[builtins.str] = None,
        timeout: typing.Optional[jsii.Number] = None,
    ) -> None:
        '''
        :param parameters: -
        :param template_body: -
        :param template_url: -
        :param timeout: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__25327f9b7ddf68f2c9dae74053743641437aa840308c92297b09ca5ce4b2daad)
            check_type(argname="argument parameters", value=parameters, expected_type=type_hints["parameters"])
            check_type(argname="argument template_body", value=template_body, expected_type=type_hints["template_body"])
            check_type(argname="argument template_url", value=template_url, expected_type=type_hints["template_url"])
            check_type(argname="argument timeout", value=timeout, expected_type=type_hints["timeout"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if parameters is not None:
            self._values["parameters"] = parameters
        if template_body is not None:
            self._values["template_body"] = template_body
        if template_url is not None:
            self._values["template_url"] = template_url
        if timeout is not None:
            self._values["timeout"] = timeout

    @builtins.property
    def parameters(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        result = self._values.get("parameters")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def template_body(self) -> typing.Optional[builtins.str]:
        result = self._values.get("template_body")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def template_url(self) -> typing.Optional[builtins.str]:
        result = self._values.get("template_url")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def timeout(self) -> typing.Optional[jsii.Number]:
        result = self._values.get("timeout")
        return typing.cast(typing.Optional[jsii.Number], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "NestedStackProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class Reference(
    Intrinsic,
    metaclass=jsii.JSIIAbstractClass,
    jsii_type="@alicloud/ros-cdk-core.Reference",
):
    '''An intrinsic Token that represents a reference to a construct.

    References are recorded.
    '''

    def __init__(
        self,
        value: typing.Any,
        target: "IConstruct",
        display_name: typing.Optional[builtins.str] = None,
    ) -> None:
        '''
        :param value: -
        :param target: -
        :param display_name: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1f8dc2790577ee818f6a8555fec401bd0e2aad0ca17cbcf1ad940dc9bc4fe6f0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            check_type(argname="argument target", value=target, expected_type=type_hints["target"])
            check_type(argname="argument display_name", value=display_name, expected_type=type_hints["display_name"])
        jsii.create(self.__class__, self, [value, target, display_name])

    @jsii.member(jsii_name="isReference")
    @builtins.classmethod
    def is_reference(cls, x: typing.Any) -> builtins.bool:
        '''Check whether this is actually a Reference.

        :param x: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ac9bc39f84fa4ed07ec85a081144f2a366bff3352728edce92eb3a3ff10c4f12)
            check_type(argname="argument x", value=x, expected_type=type_hints["x"])
        return typing.cast(builtins.bool, jsii.sinvoke(cls, "isReference", [x]))

    @builtins.property
    @jsii.member(jsii_name="displayName")
    def display_name(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "displayName"))

    @builtins.property
    @jsii.member(jsii_name="target")
    def target(self) -> "IConstruct":
        return typing.cast("IConstruct", jsii.get(self, "target"))


class _ReferenceProxy(Reference):
    pass

# Adding a "__jsii_proxy_class__(): typing.Type" function to the abstract class
typing.cast(typing.Any, Reference).__jsii_proxy_class__ = lambda : _ReferenceProxy


@jsii.enum(jsii_type="@alicloud/ros-cdk-core.RemovalPolicy")
class RemovalPolicy(enum.Enum):
    DESTROY = "DESTROY"
    RETAIN = "RETAIN"


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.RemovalPolicyOptions",
    jsii_struct_bases=[],
    name_mapping={
        "apply_to_update_replace_policy": "applyToUpdateReplacePolicy",
        "default_policy": "defaultPolicy",
    },
)
class RemovalPolicyOptions:
    def __init__(
        self,
        *,
        apply_to_update_replace_policy: typing.Optional[builtins.bool] = None,
        default_policy: typing.Optional[RemovalPolicy] = None,
    ) -> None:
        '''
        :param apply_to_update_replace_policy: -
        :param default_policy: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__555f312cbc4130456a07898da4b77d3db0176039426274e8555cce2bfbd8dfc7)
            check_type(argname="argument apply_to_update_replace_policy", value=apply_to_update_replace_policy, expected_type=type_hints["apply_to_update_replace_policy"])
            check_type(argname="argument default_policy", value=default_policy, expected_type=type_hints["default_policy"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if apply_to_update_replace_policy is not None:
            self._values["apply_to_update_replace_policy"] = apply_to_update_replace_policy
        if default_policy is not None:
            self._values["default_policy"] = default_policy

    @builtins.property
    def apply_to_update_replace_policy(self) -> typing.Optional[builtins.bool]:
        result = self._values.get("apply_to_update_replace_policy")
        return typing.cast(typing.Optional[builtins.bool], result)

    @builtins.property
    def default_policy(self) -> typing.Optional[RemovalPolicy]:
        result = self._values.get("default_policy")
        return typing.cast(typing.Optional[RemovalPolicy], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RemovalPolicyOptions(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.ResolveOptions",
    jsii_struct_bases=[],
    name_mapping={"resolver": "resolver", "scope": "scope", "preparing": "preparing"},
)
class ResolveOptions:
    def __init__(
        self,
        *,
        resolver: ITokenResolver,
        scope: "IConstruct",
        preparing: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Options to the resolve() operation.

        NOT the same as the ResolveContext; ResolveContext is exposed to Token
        implementors and resolution hooks, whereas this struct is just to bundle
        a number of things that would otherwise be arguments to resolve() in a
        readable way.

        :param resolver: The resolver to apply to any resolvable tokens found.
        :param scope: The scope from which resolution is performed.
        :param preparing: Whether the resolution is being executed during the prepare phase or not. Default: false
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1cf5324bcb826f8eda6917454783379af5c03bb9882d50455f1f28ea76eabbf3)
            check_type(argname="argument resolver", value=resolver, expected_type=type_hints["resolver"])
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument preparing", value=preparing, expected_type=type_hints["preparing"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "resolver": resolver,
            "scope": scope,
        }
        if preparing is not None:
            self._values["preparing"] = preparing

    @builtins.property
    def resolver(self) -> ITokenResolver:
        '''The resolver to apply to any resolvable tokens found.'''
        result = self._values.get("resolver")
        assert result is not None, "Required property 'resolver' is missing"
        return typing.cast(ITokenResolver, result)

    @builtins.property
    def scope(self) -> "IConstruct":
        '''The scope from which resolution is performed.'''
        result = self._values.get("scope")
        assert result is not None, "Required property 'scope' is missing"
        return typing.cast("IConstruct", result)

    @builtins.property
    def preparing(self) -> typing.Optional[builtins.bool]:
        '''Whether the resolution is being executed during the prepare phase or not.

        :default: false
        '''
        result = self._values.get("preparing")
        return typing.cast(typing.Optional[builtins.bool], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ResolveOptions(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.ResourceProps",
    jsii_struct_bases=[],
    name_mapping={"physical_name": "physicalName"},
)
class ResourceProps:
    def __init__(self, *, physical_name: typing.Optional[builtins.str] = None) -> None:
        '''Construction properties for {@link Resource}.

        :param physical_name: The value passed in by users to the physical name prop of the resource. - ``undefined`` implies that a physical name will be allocated during deployment. - a concrete value implies a specific physical name - ``PhysicalName.GENERATE_IF_NEEDED`` is a marker that indicates that a physical will only be generated by the CDK if it is needed for cross-environment references. Otherwise, it will be allocated. Default: - The physical name will be allocated at deployment time
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5eb39483257934b924a474a55b25ee60c39f38148113cb72ba8962bb0da42ada)
            check_type(argname="argument physical_name", value=physical_name, expected_type=type_hints["physical_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if physical_name is not None:
            self._values["physical_name"] = physical_name

    @builtins.property
    def physical_name(self) -> typing.Optional[builtins.str]:
        '''The value passed in by users to the physical name prop of the resource.

        - ``undefined`` implies that a physical name will be allocated during deployment.
        - a concrete value implies a specific physical name
        - ``PhysicalName.GENERATE_IF_NEEDED`` is a marker that indicates that a physical will only be generated
          by the CDK if it is needed for cross-environment references. Otherwise, it will be allocated.

        :default: - The physical name will be allocated at deployment time
        '''
        result = self._values.get("physical_name")
        return typing.cast(typing.Optional[builtins.str], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ResourceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.RosConditionProps",
    jsii_struct_bases=[],
    name_mapping={"expression": "expression"},
)
class RosConditionProps:
    def __init__(
        self,
        *,
        expression: typing.Optional[IRosConditionExpression] = None,
    ) -> None:
        '''
        :param expression: The expression that the condition will evaluate. Default: - None.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f534de3d8e5fcb3d98fa2b9d753eded2ae1398e9c0cfaa50692ce7724b85d774)
            check_type(argname="argument expression", value=expression, expected_type=type_hints["expression"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if expression is not None:
            self._values["expression"] = expression

    @builtins.property
    def expression(self) -> typing.Optional[IRosConditionExpression]:
        '''The expression that the condition will evaluate.

        :default: - None.
        '''
        result = self._values.get("expression")
        return typing.cast(typing.Optional[IRosConditionExpression], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosConditionProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.enum(jsii_type="@alicloud/ros-cdk-core.RosDeletionPolicy")
class RosDeletionPolicy(enum.Enum):
    '''With the DeletionPolicy attribute you can preserve or (in some cases) backup a resource when its stack is deleted.

    You specify a DeletionPolicy attribute for each resource that you want to control. If a resource has no DeletionPolicy
    attribute, ROS deletes the resource by default.
    '''

    DELETE = "DELETE"
    '''ROS will deletes the resource and all its content if applicable during stack deletion.

    You can add this deletion policy to any resource type.
    '''
    RETAIN = "RETAIN"
    '''ROS keeps the resource without deleting the resource or its contents when its stack is deleted.

    You can add this deletion policy to any resource type.
    '''


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.RosMappingProps",
    jsii_struct_bases=[],
    name_mapping={"mapping": "mapping"},
)
class RosMappingProps:
    def __init__(
        self,
        *,
        mapping: typing.Optional[typing.Mapping[builtins.str, typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        '''
        :param mapping: Mapping of key to a set of corresponding set of named values. The key identifies a map of name-value pairs and must be unique within the mapping. For example, if you want to set values based on a region, you can create a mapping that uses the region name as a key and contains the values you want to specify for each specific region. Default: - No mapping.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dcd93622adc1517313de11a1d1758998640b5ec2e8e86746a8317929c727ae61)
            check_type(argname="argument mapping", value=mapping, expected_type=type_hints["mapping"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if mapping is not None:
            self._values["mapping"] = mapping

    @builtins.property
    def mapping(
        self,
    ) -> typing.Optional[typing.Mapping[builtins.str, typing.Mapping[builtins.str, typing.Any]]]:
        '''Mapping of key to a set of corresponding set of named values.

        The key identifies a map of name-value pairs and must be unique within the mapping.

        For example, if you want to set values based on a region, you can create a mapping
        that uses the region name as a key and contains the values you want to specify for
        each specific region.

        :default: - No mapping.
        '''
        result = self._values.get("mapping")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Mapping[builtins.str, typing.Any]]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosMappingProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.RosOutputProps",
    jsii_struct_bases=[],
    name_mapping={
        "value": "value",
        "condition": "condition",
        "description": "description",
        "export_name": "exportName",
    },
)
class RosOutputProps:
    def __init__(
        self,
        *,
        value: typing.Any,
        condition: typing.Optional["RosCondition"] = None,
        description: typing.Optional[builtins.str] = None,
        export_name: typing.Optional[builtins.str] = None,
    ) -> None:
        '''
        :param value: The value of the property returned by Resource Orchestration Service. The value of an output can include literals, parameter references, pseudo-parameters, a mapping value, or intrinsic functions.
        :param condition: A condition to associate with this output value. If the condition evaluates to ``false``, this output value will not be included in the stack. Default: - No condition is associated with the output.
        :param description: A String type that describes the output value. The description can be a maximum of 4 K in length. Default: - No description.
        :param export_name: The name used to export the value of this output across stacks. To import the value from another stack, use ``Fn.importValue(exportName)``. Default: - the output is not exported
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ee818edecc8dc711db71a3f783f7d205fa34f9482dad186f363524140313425c)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            check_type(argname="argument condition", value=condition, expected_type=type_hints["condition"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument export_name", value=export_name, expected_type=type_hints["export_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "value": value,
        }
        if condition is not None:
            self._values["condition"] = condition
        if description is not None:
            self._values["description"] = description
        if export_name is not None:
            self._values["export_name"] = export_name

    @builtins.property
    def value(self) -> typing.Any:
        '''The value of the property returned by Resource Orchestration Service.

        The value of an output can include literals, parameter references, pseudo-parameters,
        a mapping value, or intrinsic functions.
        '''
        result = self._values.get("value")
        assert result is not None, "Required property 'value' is missing"
        return typing.cast(typing.Any, result)

    @builtins.property
    def condition(self) -> typing.Optional["RosCondition"]:
        '''A condition to associate with this output value.

        If the condition evaluates
        to ``false``, this output value will not be included in the stack.

        :default: - No condition is associated with the output.
        '''
        result = self._values.get("condition")
        return typing.cast(typing.Optional["RosCondition"], result)

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        '''A String type that describes the output value.

        The description can be a maximum of 4 K in length.

        :default: - No description.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def export_name(self) -> typing.Optional[builtins.str]:
        '''The name used to export the value of this output across stacks.

        To import the value from another stack, use ``Fn.importValue(exportName)``.

        :default: - the output is not exported
        '''
        result = self._values.get("export_name")
        return typing.cast(typing.Optional[builtins.str], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosOutputProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.RosParameterProps",
    jsii_struct_bases=[],
    name_mapping={
        "allowed_pattern": "allowedPattern",
        "allowed_values": "allowedValues",
        "association_property": "associationProperty",
        "association_property_metadata": "associationPropertyMetadata",
        "confirm": "confirm",
        "constraint_description": "constraintDescription",
        "default_value": "defaultValue",
        "description": "description",
        "label": "label",
        "max_length": "maxLength",
        "max_value": "maxValue",
        "min_length": "minLength",
        "min_value": "minValue",
        "no_echo": "noEcho",
        "text_area": "textArea",
        "type": "type",
    },
)
class RosParameterProps:
    def __init__(
        self,
        *,
        allowed_pattern: typing.Optional[builtins.str] = None,
        allowed_values: typing.Optional[typing.Sequence[typing.Any]] = None,
        association_property: typing.Optional[builtins.str] = None,
        association_property_metadata: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        confirm: typing.Optional[builtins.bool] = None,
        constraint_description: typing.Optional[typing.Union[builtins.str, typing.Mapping[builtins.str, builtins.str]]] = None,
        default_value: typing.Any = None,
        description: typing.Optional[typing.Union[builtins.str, typing.Mapping[builtins.str, builtins.str]]] = None,
        label: typing.Optional[builtins.str] = None,
        max_length: typing.Optional[jsii.Number] = None,
        max_value: typing.Optional[jsii.Number] = None,
        min_length: typing.Optional[jsii.Number] = None,
        min_value: typing.Optional[jsii.Number] = None,
        no_echo: typing.Optional[builtins.bool] = None,
        text_area: typing.Optional[builtins.bool] = None,
        type: typing.Optional["RosParameterType"] = None,
    ) -> None:
        '''
        :param allowed_pattern: -
        :param allowed_values: -
        :param association_property: -
        :param association_property_metadata: -
        :param confirm: -
        :param constraint_description: -
        :param default_value: -
        :param description: -
        :param label: -
        :param max_length: -
        :param max_value: -
        :param min_length: -
        :param min_value: -
        :param no_echo: -
        :param text_area: -
        :param type: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c39b9c0a543f07fdf20a7f9378ee395653a40289a7101cf922b7de73c8a5047b)
            check_type(argname="argument allowed_pattern", value=allowed_pattern, expected_type=type_hints["allowed_pattern"])
            check_type(argname="argument allowed_values", value=allowed_values, expected_type=type_hints["allowed_values"])
            check_type(argname="argument association_property", value=association_property, expected_type=type_hints["association_property"])
            check_type(argname="argument association_property_metadata", value=association_property_metadata, expected_type=type_hints["association_property_metadata"])
            check_type(argname="argument confirm", value=confirm, expected_type=type_hints["confirm"])
            check_type(argname="argument constraint_description", value=constraint_description, expected_type=type_hints["constraint_description"])
            check_type(argname="argument default_value", value=default_value, expected_type=type_hints["default_value"])
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument label", value=label, expected_type=type_hints["label"])
            check_type(argname="argument max_length", value=max_length, expected_type=type_hints["max_length"])
            check_type(argname="argument max_value", value=max_value, expected_type=type_hints["max_value"])
            check_type(argname="argument min_length", value=min_length, expected_type=type_hints["min_length"])
            check_type(argname="argument min_value", value=min_value, expected_type=type_hints["min_value"])
            check_type(argname="argument no_echo", value=no_echo, expected_type=type_hints["no_echo"])
            check_type(argname="argument text_area", value=text_area, expected_type=type_hints["text_area"])
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if allowed_pattern is not None:
            self._values["allowed_pattern"] = allowed_pattern
        if allowed_values is not None:
            self._values["allowed_values"] = allowed_values
        if association_property is not None:
            self._values["association_property"] = association_property
        if association_property_metadata is not None:
            self._values["association_property_metadata"] = association_property_metadata
        if confirm is not None:
            self._values["confirm"] = confirm
        if constraint_description is not None:
            self._values["constraint_description"] = constraint_description
        if default_value is not None:
            self._values["default_value"] = default_value
        if description is not None:
            self._values["description"] = description
        if label is not None:
            self._values["label"] = label
        if max_length is not None:
            self._values["max_length"] = max_length
        if max_value is not None:
            self._values["max_value"] = max_value
        if min_length is not None:
            self._values["min_length"] = min_length
        if min_value is not None:
            self._values["min_value"] = min_value
        if no_echo is not None:
            self._values["no_echo"] = no_echo
        if text_area is not None:
            self._values["text_area"] = text_area
        if type is not None:
            self._values["type"] = type

    @builtins.property
    def allowed_pattern(self) -> typing.Optional[builtins.str]:
        result = self._values.get("allowed_pattern")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def allowed_values(self) -> typing.Optional[typing.List[typing.Any]]:
        result = self._values.get("allowed_values")
        return typing.cast(typing.Optional[typing.List[typing.Any]], result)

    @builtins.property
    def association_property(self) -> typing.Optional[builtins.str]:
        result = self._values.get("association_property")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def association_property_metadata(
        self,
    ) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        result = self._values.get("association_property_metadata")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def confirm(self) -> typing.Optional[builtins.bool]:
        result = self._values.get("confirm")
        return typing.cast(typing.Optional[builtins.bool], result)

    @builtins.property
    def constraint_description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, typing.Mapping[builtins.str, builtins.str]]]:
        result = self._values.get("constraint_description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, typing.Mapping[builtins.str, builtins.str]]], result)

    @builtins.property
    def default_value(self) -> typing.Any:
        result = self._values.get("default_value")
        return typing.cast(typing.Any, result)

    @builtins.property
    def description(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, typing.Mapping[builtins.str, builtins.str]]]:
        result = self._values.get("description")
        return typing.cast(typing.Optional[typing.Union[builtins.str, typing.Mapping[builtins.str, builtins.str]]], result)

    @builtins.property
    def label(self) -> typing.Optional[builtins.str]:
        result = self._values.get("label")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def max_length(self) -> typing.Optional[jsii.Number]:
        result = self._values.get("max_length")
        return typing.cast(typing.Optional[jsii.Number], result)

    @builtins.property
    def max_value(self) -> typing.Optional[jsii.Number]:
        result = self._values.get("max_value")
        return typing.cast(typing.Optional[jsii.Number], result)

    @builtins.property
    def min_length(self) -> typing.Optional[jsii.Number]:
        result = self._values.get("min_length")
        return typing.cast(typing.Optional[jsii.Number], result)

    @builtins.property
    def min_value(self) -> typing.Optional[jsii.Number]:
        result = self._values.get("min_value")
        return typing.cast(typing.Optional[jsii.Number], result)

    @builtins.property
    def no_echo(self) -> typing.Optional[builtins.bool]:
        result = self._values.get("no_echo")
        return typing.cast(typing.Optional[builtins.bool], result)

    @builtins.property
    def text_area(self) -> typing.Optional[builtins.bool]:
        result = self._values.get("text_area")
        return typing.cast(typing.Optional[builtins.bool], result)

    @builtins.property
    def type(self) -> typing.Optional["RosParameterType"]:
        result = self._values.get("type")
        return typing.cast(typing.Optional["RosParameterType"], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosParameterProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.enum(jsii_type="@alicloud/ros-cdk-core.RosParameterType")
class RosParameterType(enum.Enum):
    STRING = "STRING"
    NUMBER = "NUMBER"
    JSON = "JSON"
    BOOLEAN = "BOOLEAN"
    COMMAD_ELIMITED_LIST = "COMMAD_ELIMITED_LIST"
    OOS_PARAMETER = "OOS_PARAMETER"
    OOS_SECRET_PARAMETER = "OOS_SECRET_PARAMETER"


class RosPseudo(metaclass=jsii.JSIIMeta, jsii_type="@alicloud/ros-cdk-core.RosPseudo"):
    '''Accessor for pseudo parameters.'''

    @jsii.python.classproperty
    @jsii.member(jsii_name="accountId")
    def account_id(cls) -> builtins.str:
        return typing.cast(builtins.str, jsii.sget(cls, "accountId"))

    @jsii.python.classproperty
    @jsii.member(jsii_name="index")
    def index(cls) -> jsii.Number:
        return typing.cast(jsii.Number, jsii.sget(cls, "index"))

    @jsii.python.classproperty
    @jsii.member(jsii_name="noValue")
    def no_value(cls) -> IResolvable:
        return typing.cast(IResolvable, jsii.sget(cls, "noValue"))

    @jsii.python.classproperty
    @jsii.member(jsii_name="region")
    def region(cls) -> builtins.str:
        return typing.cast(builtins.str, jsii.sget(cls, "region"))

    @jsii.python.classproperty
    @jsii.member(jsii_name="stackId")
    def stack_id(cls) -> builtins.str:
        return typing.cast(builtins.str, jsii.sget(cls, "stackId"))

    @jsii.python.classproperty
    @jsii.member(jsii_name="stackName")
    def stack_name(cls) -> builtins.str:
        return typing.cast(builtins.str, jsii.sget(cls, "stackName"))

    @jsii.python.classproperty
    @jsii.member(jsii_name="tenantId")
    def tenant_id(cls) -> builtins.str:
        return typing.cast(builtins.str, jsii.sget(cls, "tenantId"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.RosResourceProps",
    jsii_struct_bases=[],
    name_mapping={"type": "type", "properties": "properties"},
)
class RosResourceProps:
    def __init__(
        self,
        *,
        type: builtins.str,
        properties: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
    ) -> None:
        '''
        :param type: ROS template resource type (e.g. ``ALIYUN::ECS::Instance``).
        :param properties: Resource properties. Default: - No resource properties.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8ddbb242164b50fd9890ea53698b2754f764c707d0eda9dcea236241f154b189)
            check_type(argname="argument type", value=type, expected_type=type_hints["type"])
            check_type(argname="argument properties", value=properties, expected_type=type_hints["properties"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "type": type,
        }
        if properties is not None:
            self._values["properties"] = properties

    @builtins.property
    def type(self) -> builtins.str:
        '''ROS template resource type (e.g. ``ALIYUN::ECS::Instance``).'''
        result = self._values.get("type")
        assert result is not None, "Required property 'type' is missing"
        return typing.cast(builtins.str, result)

    @builtins.property
    def properties(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        '''Resource properties.

        :default: - No resource properties.
        '''
        result = self._values.get("properties")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosResourceProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.RosTag",
    jsii_struct_bases=[],
    name_mapping={"key": "key", "value": "value"},
)
class RosTag:
    def __init__(
        self,
        *,
        key: builtins.str,
        value: typing.Optional[builtins.str] = None,
    ) -> None:
        '''
        :param key: -
        :param value: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__48ebd8113f5a95e7206754d99c94b514bab899631027b98c5b25c87874858e36)
            check_type(argname="argument key", value=key, expected_type=type_hints["key"])
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "key": key,
        }
        if value is not None:
            self._values["value"] = value

    @builtins.property
    def key(self) -> builtins.str:
        result = self._values.get("key")
        assert result is not None, "Required property 'key' is missing"
        return typing.cast(builtins.str, result)

    @builtins.property
    def value(self) -> typing.Optional[builtins.str]:
        result = self._values.get("value")
        return typing.cast(typing.Optional[builtins.str], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosTag(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.StackProps",
    jsii_struct_bases=[],
    name_mapping={
        "description": "description",
        "enable_resource_property_constraint": "enableResourcePropertyConstraint",
        "metadata": "metadata",
        "stack_name": "stackName",
        "synthesizer": "synthesizer",
        "tags": "tags",
        "version": "version",
    },
)
class StackProps:
    def __init__(
        self,
        *,
        description: typing.Optional[builtins.str] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
        metadata: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        stack_name: typing.Optional[builtins.str] = None,
        synthesizer: typing.Optional[IStackSynthesizer] = None,
        tags: typing.Optional[typing.Mapping[builtins.str, builtins.str]] = None,
        version: typing.Optional[builtins.str] = None,
    ) -> None:
        '''
        :param description: A description of the stack. Default: - No description.
        :param enable_resource_property_constraint: -
        :param metadata: -
        :param stack_name: Name to deploy the stack with. Default: - Derived from construct path.
        :param synthesizer: Synthesis method to use while deploying this stack. Default: - ``DefaultStackSynthesizer``
        :param tags: Stack tags that will be applied to all the taggable resources and the stack itself. Default: {}
        :param version: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a951b9e38e4266f7795d9cf17d13c5cab9723d247372544c2ea0f1e1034a0ddd)
            check_type(argname="argument description", value=description, expected_type=type_hints["description"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
            check_type(argname="argument metadata", value=metadata, expected_type=type_hints["metadata"])
            check_type(argname="argument stack_name", value=stack_name, expected_type=type_hints["stack_name"])
            check_type(argname="argument synthesizer", value=synthesizer, expected_type=type_hints["synthesizer"])
            check_type(argname="argument tags", value=tags, expected_type=type_hints["tags"])
            check_type(argname="argument version", value=version, expected_type=type_hints["version"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if description is not None:
            self._values["description"] = description
        if enable_resource_property_constraint is not None:
            self._values["enable_resource_property_constraint"] = enable_resource_property_constraint
        if metadata is not None:
            self._values["metadata"] = metadata
        if stack_name is not None:
            self._values["stack_name"] = stack_name
        if synthesizer is not None:
            self._values["synthesizer"] = synthesizer
        if tags is not None:
            self._values["tags"] = tags
        if version is not None:
            self._values["version"] = version

    @builtins.property
    def description(self) -> typing.Optional[builtins.str]:
        '''A description of the stack.

        :default: - No description.
        '''
        result = self._values.get("description")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def enable_resource_property_constraint(self) -> typing.Optional[builtins.bool]:
        result = self._values.get("enable_resource_property_constraint")
        return typing.cast(typing.Optional[builtins.bool], result)

    @builtins.property
    def metadata(self) -> typing.Optional[typing.Mapping[builtins.str, typing.Any]]:
        result = self._values.get("metadata")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, typing.Any]], result)

    @builtins.property
    def stack_name(self) -> typing.Optional[builtins.str]:
        '''Name to deploy the stack with.

        :default: - Derived from construct path.
        '''
        result = self._values.get("stack_name")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def synthesizer(self) -> typing.Optional[IStackSynthesizer]:
        '''Synthesis method to use while deploying this stack.

        :default: - ``DefaultStackSynthesizer``
        '''
        result = self._values.get("synthesizer")
        return typing.cast(typing.Optional[IStackSynthesizer], result)

    @builtins.property
    def tags(self) -> typing.Optional[typing.Mapping[builtins.str, builtins.str]]:
        '''Stack tags that will be applied to all the taggable resources and the stack itself.

        :default: {}
        '''
        result = self._values.get("tags")
        return typing.cast(typing.Optional[typing.Mapping[builtins.str, builtins.str]], result)

    @builtins.property
    def version(self) -> typing.Optional[builtins.str]:
        result = self._values.get("version")
        return typing.cast(typing.Optional[builtins.str], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "StackProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.StageProps",
    jsii_struct_bases=[],
    name_mapping={"outdir": "outdir"},
)
class StageProps:
    def __init__(self, *, outdir: typing.Optional[builtins.str] = None) -> None:
        '''Initialization props for a stage.

        :param outdir: The output directory into which to emit synthesized artifacts. Can only be specified if this stage is the root stage the app. If this is specified and this stage is nested within another stage, an error will be thrown. Default - for nested stages, outdir will be determined as a relative directory to the outdir of the app. For apps, if outdir is not specified, a temporary directory will be created.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0b4d117a06de3b8d93c347567af09a0e7660f43182f1b89b3d9b139dfc7315a8)
            check_type(argname="argument outdir", value=outdir, expected_type=type_hints["outdir"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if outdir is not None:
            self._values["outdir"] = outdir

    @builtins.property
    def outdir(self) -> typing.Optional[builtins.str]:
        '''The output directory into which to emit synthesized artifacts.

        Can only be specified if this stage is the root stage the app. If this is
        specified and this stage is nested within another stage, an error will be
        thrown.

        Default - for nested stages, outdir will be determined as a relative
        directory to the outdir of the app. For apps, if outdir is not specified, a
        temporary directory will be created.
        '''
        result = self._values.get("outdir")
        return typing.cast(typing.Optional[builtins.str], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "StageProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.StageSynthesisOptions",
    jsii_struct_bases=[],
    name_mapping={"skip_validation": "skipValidation"},
)
class StageSynthesisOptions:
    def __init__(
        self,
        *,
        skip_validation: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Options for assemly synthesis.

        :param skip_validation: Should we skip construct validation. Default: - false
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4840d4380846528233f8217e18a55e03a4a174196e2c0e4f2e2111b8cfd9d593)
            check_type(argname="argument skip_validation", value=skip_validation, expected_type=type_hints["skip_validation"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if skip_validation is not None:
            self._values["skip_validation"] = skip_validation

    @builtins.property
    def skip_validation(self) -> typing.Optional[builtins.bool]:
        '''Should we skip construct validation.

        :default: - false
        '''
        result = self._values.get("skip_validation")
        return typing.cast(typing.Optional[builtins.bool], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "StageSynthesisOptions(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IFragmentConcatenator)
class StringConcat(
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.StringConcat",
):
    '''Converts all fragments to strings and concats those.

    Drops 'undefined's.
    '''

    def __init__(self) -> None:
        jsii.create(self.__class__, self, [])

    @jsii.member(jsii_name="join")
    def join(self, left: typing.Any, right: typing.Any) -> typing.Any:
        '''Join the fragment on the left and on the right.

        :param left: -
        :param right: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aeb329831e76fa2de1f9eedf7841ce46f3da80065f0977e8f9f2d47cf23f4827)
            check_type(argname="argument left", value=left, expected_type=type_hints["left"])
            check_type(argname="argument right", value=right, expected_type=type_hints["right"])
        return typing.cast(typing.Any, jsii.invoke(self, "join", [left, right]))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.SynthesisOptions",
    jsii_struct_bases=[_ros_cdk_cxapi_45dace6b.AssemblyBuildOptions],
    name_mapping={
        "runtime_info": "runtimeInfo",
        "outdir": "outdir",
        "skip_validation": "skipValidation",
    },
)
class SynthesisOptions(_ros_cdk_cxapi_45dace6b.AssemblyBuildOptions):
    def __init__(
        self,
        *,
        runtime_info: typing.Optional[typing.Union[_ros_cdk_cxapi_45dace6b.RuntimeInfo, typing.Dict[builtins.str, typing.Any]]] = None,
        outdir: typing.Optional[builtins.str] = None,
        skip_validation: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''(deprecated) Options for synthesis.

        :param runtime_info: Include the specified runtime information (module versions) in manifest. Default: - if this option is not specified, runtime info will not be included
        :param outdir: (deprecated) The output directory into which to synthesize the cloud assembly. Default: - creates a temporary directory
        :param skip_validation: (deprecated) Whether synthesis should skip the validation phase. Default: false

        :deprecated: use ``app.synth()`` or ``stage.synth()`` instead

        :stability: deprecated
        '''
        if isinstance(runtime_info, dict):
            runtime_info = _ros_cdk_cxapi_45dace6b.RuntimeInfo(**runtime_info)
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b34253714854164c90ac2f1ce4bd38e20e18b53c45053e143999cad2d528be12)
            check_type(argname="argument runtime_info", value=runtime_info, expected_type=type_hints["runtime_info"])
            check_type(argname="argument outdir", value=outdir, expected_type=type_hints["outdir"])
            check_type(argname="argument skip_validation", value=skip_validation, expected_type=type_hints["skip_validation"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if runtime_info is not None:
            self._values["runtime_info"] = runtime_info
        if outdir is not None:
            self._values["outdir"] = outdir
        if skip_validation is not None:
            self._values["skip_validation"] = skip_validation

    @builtins.property
    def runtime_info(self) -> typing.Optional[_ros_cdk_cxapi_45dace6b.RuntimeInfo]:
        '''Include the specified runtime information (module versions) in manifest.

        :default: - if this option is not specified, runtime info will not be included
        '''
        result = self._values.get("runtime_info")
        return typing.cast(typing.Optional[_ros_cdk_cxapi_45dace6b.RuntimeInfo], result)

    @builtins.property
    def outdir(self) -> typing.Optional[builtins.str]:
        '''(deprecated) The output directory into which to synthesize the cloud assembly.

        :default: - creates a temporary directory

        :stability: deprecated
        '''
        result = self._values.get("outdir")
        return typing.cast(typing.Optional[builtins.str], result)

    @builtins.property
    def skip_validation(self) -> typing.Optional[builtins.bool]:
        '''(deprecated) Whether synthesis should skip the validation phase.

        :default: false

        :stability: deprecated
        '''
        result = self._values.get("skip_validation")
        return typing.cast(typing.Optional[builtins.bool], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "SynthesisOptions(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class TagManager(
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.TagManager",
):
    '''TagManager facilitates a common implementation of tagging for Constructs.'''

    def __init__(
        self,
        tag_type: "TagType",
        resource_type_name: builtins.str,
        tag_structure: typing.Any = None,
        *,
        tag_property_name: typing.Optional[builtins.str] = None,
    ) -> None:
        '''
        :param tag_type: -
        :param resource_type_name: -
        :param tag_structure: -
        :param tag_property_name: The name of the property in ROS for these tags. Normally this is ``tags``, but Cognito UserPool uses UserPoolTags Default: "tags"
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b31f0916603b9ac0a19041d432d8b63a66c9d635884be9ce7cfe64043d13b996)
            check_type(argname="argument tag_type", value=tag_type, expected_type=type_hints["tag_type"])
            check_type(argname="argument resource_type_name", value=resource_type_name, expected_type=type_hints["resource_type_name"])
            check_type(argname="argument tag_structure", value=tag_structure, expected_type=type_hints["tag_structure"])
        options = TagManagerOptions(tag_property_name=tag_property_name)

        jsii.create(self.__class__, self, [tag_type, resource_type_name, tag_structure, options])

    @jsii.member(jsii_name="isTaggable")
    @builtins.classmethod
    def is_taggable(cls, construct: typing.Any) -> builtins.bool:
        '''Check whether the given construct is Taggable.

        :param construct: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5e3db5dabbad4d55b94d26d442069e119d50daaa4b8d2f279a7dbb32281bf0cd)
            check_type(argname="argument construct", value=construct, expected_type=type_hints["construct"])
        return typing.cast(builtins.bool, jsii.sinvoke(cls, "isTaggable", [construct]))

    @jsii.member(jsii_name="applyTagAspectHere")
    def apply_tag_aspect_here(
        self,
        include: typing.Optional[typing.Sequence[builtins.str]] = None,
        exclude: typing.Optional[typing.Sequence[builtins.str]] = None,
    ) -> builtins.bool:
        '''Determine if the aspect applies here.

        Looks at the include and exclude resourceTypeName arrays to determine if
        the aspect applies here

        :param include: -
        :param exclude: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4e52e20f19c15005b1419702493d03ce70ff0090e04c7b0116e7842aaea82195)
            check_type(argname="argument include", value=include, expected_type=type_hints["include"])
            check_type(argname="argument exclude", value=exclude, expected_type=type_hints["exclude"])
        return typing.cast(builtins.bool, jsii.invoke(self, "applyTagAspectHere", [include, exclude]))

    @jsii.member(jsii_name="hasTags")
    def has_tags(self) -> builtins.bool:
        '''Returns true if there are any tags defined.'''
        return typing.cast(builtins.bool, jsii.invoke(self, "hasTags", []))

    @jsii.member(jsii_name="removeTag")
    def remove_tag(self, key: builtins.str, priority: jsii.Number) -> None:
        '''Removes the specified tag from the array if it exists.

        :param key: The tag to remove.
        :param priority: The priority of the remove operation.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__607bb507ff316ca9882e67bbdda771afd44a804d1822223bddac5091599672e3)
            check_type(argname="argument key", value=key, expected_type=type_hints["key"])
            check_type(argname="argument priority", value=priority, expected_type=type_hints["priority"])
        return typing.cast(None, jsii.invoke(self, "removeTag", [key, priority]))

    @jsii.member(jsii_name="renderTags")
    def render_tags(self) -> typing.Any:
        '''Renders tags into the proper format based on TagType.'''
        return typing.cast(typing.Any, jsii.invoke(self, "renderTags", []))

    @jsii.member(jsii_name="setTag")
    def set_tag(
        self,
        key: builtins.str,
        value: builtins.str,
        priority: typing.Optional[jsii.Number] = None,
        apply_to_launched_instances: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Adds the specified tag to the array of tags.

        :param key: -
        :param value: -
        :param priority: -
        :param apply_to_launched_instances: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1b5c4a3cfda8aa538d53e13c5614c2be4dcc0dd1693e8a3c09b4896ee2915fa8)
            check_type(argname="argument key", value=key, expected_type=type_hints["key"])
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
            check_type(argname="argument priority", value=priority, expected_type=type_hints["priority"])
            check_type(argname="argument apply_to_launched_instances", value=apply_to_launched_instances, expected_type=type_hints["apply_to_launched_instances"])
        return typing.cast(None, jsii.invoke(self, "setTag", [key, value, priority, apply_to_launched_instances]))

    @jsii.member(jsii_name="tagValues")
    def tag_values(self) -> typing.Mapping[builtins.str, builtins.str]:
        '''Render the tags in a readable format.'''
        return typing.cast(typing.Mapping[builtins.str, builtins.str], jsii.invoke(self, "tagValues", []))

    @builtins.property
    @jsii.member(jsii_name="tagPropertyName")
    def tag_property_name(self) -> builtins.str:
        '''The property name for tag values.

        Normally this is ``tags`` but some resources choose a different name. Cognito
        UserPool uses UserPoolTags
        '''
        return typing.cast(builtins.str, jsii.get(self, "tagPropertyName"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.TagManagerOptions",
    jsii_struct_bases=[],
    name_mapping={"tag_property_name": "tagPropertyName"},
)
class TagManagerOptions:
    def __init__(
        self,
        *,
        tag_property_name: typing.Optional[builtins.str] = None,
    ) -> None:
        '''Options to configure TagManager behavior.

        :param tag_property_name: The name of the property in ROS for these tags. Normally this is ``tags``, but Cognito UserPool uses UserPoolTags Default: "tags"
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__762aea27829aa2022727347af6041130cc95adf01466f33b366e43fc81c7d366)
            check_type(argname="argument tag_property_name", value=tag_property_name, expected_type=type_hints["tag_property_name"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if tag_property_name is not None:
            self._values["tag_property_name"] = tag_property_name

    @builtins.property
    def tag_property_name(self) -> typing.Optional[builtins.str]:
        '''The name of the property in ROS for these tags.

        Normally this is ``tags``, but Cognito UserPool uses UserPoolTags

        :default: "tags"
        '''
        result = self._values.get("tag_property_name")
        return typing.cast(typing.Optional[builtins.str], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "TagManagerOptions(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.enum(jsii_type="@alicloud/ros-cdk-core.TagType")
class TagType(enum.Enum):
    STANDARD = "STANDARD"
    AUTOSCALING_GROUP = "AUTOSCALING_GROUP"
    MAP = "MAP"
    KEY_VALUE = "KEY_VALUE"
    NOT_TAGGABLE = "NOT_TAGGABLE"


class Token(metaclass=jsii.JSIIMeta, jsii_type="@alicloud/ros-cdk-core.Token"):
    '''Represents a special or lazily-evaluated value.

    Can be used to delay evaluation of a certain value in case, for example,
    that it requires some context or late-bound data. Can also be used to
    mark values that need special processing at document rendering time.

    Tokens can be embedded into strings while retaining their original
    semantics.
    '''

    @jsii.member(jsii_name="asAny")
    @builtins.classmethod
    def as_any(cls, value: typing.Any) -> IResolvable:
        '''Return a resolvable representation of the given value.

        :param value: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__10cbda2ba292cace9348c3269b4a0e4ef2c137fd31c2cfe347e37b9a82a42113)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        return typing.cast(IResolvable, jsii.sinvoke(cls, "asAny", [value]))

    @jsii.member(jsii_name="asList")
    @builtins.classmethod
    def as_list(
        cls,
        value: typing.Any,
        *,
        display_hint: typing.Optional[builtins.str] = None,
    ) -> typing.List[builtins.str]:
        '''Return a reversible list representation of this token.

        :param value: -
        :param display_hint: A hint for the Token's purpose when stringifying it.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8f4e057c19741202d697745f96cdac2507420fb69665f906cfbf139e83e5c25f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        options = EncodingOptions(display_hint=display_hint)

        return typing.cast(typing.List[builtins.str], jsii.sinvoke(cls, "asList", [value, options]))

    @jsii.member(jsii_name="asNumber")
    @builtins.classmethod
    def as_number(cls, value: typing.Any) -> jsii.Number:
        '''Return a reversible number representation of this token.

        :param value: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e810b924d685cb48f32839a0b7f6c794e8e7479f053d6175afb6b297c374c257)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        return typing.cast(jsii.Number, jsii.sinvoke(cls, "asNumber", [value]))

    @jsii.member(jsii_name="asString")
    @builtins.classmethod
    def as_string(
        cls,
        value: typing.Any,
        *,
        display_hint: typing.Optional[builtins.str] = None,
    ) -> builtins.str:
        '''Return a reversible string representation of this token.

        If the Token is initialized with a literal, the stringified value of the
        literal is returned. Otherwise, a special quoted string representation
        of the Token is returned that can be embedded into other strings.

        Strings with quoted Tokens in them can be restored back into
        complex values with the Tokens restored by calling ``resolve()``
        on the string.

        :param value: -
        :param display_hint: A hint for the Token's purpose when stringifying it.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__42e46304e3c03d9f33a2ee730e211b7adc4b55bc70bb89dc7321d0d2f309c2f3)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        options = EncodingOptions(display_hint=display_hint)

        return typing.cast(builtins.str, jsii.sinvoke(cls, "asString", [value, options]))

    @jsii.member(jsii_name="isUnresolved")
    @builtins.classmethod
    def is_unresolved(cls, obj: typing.Any) -> builtins.bool:
        '''Returns true if obj represents an unresolved value.

        One of these must be true:

        - ``obj`` is an IResolvable
        - ``obj`` is a string containing at least one encoded ``IResolvable``
        - ``obj`` is either an encoded number or list

        This does NOT recurse into lists or objects to see if they
        containing resolvables.

        :param obj: The object to test.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__44124ba50108ab8e08c87dd89f6eb94b1a0664a5a3b1da6f8700b15789bf11e3)
            check_type(argname="argument obj", value=obj, expected_type=type_hints["obj"])
        return typing.cast(builtins.bool, jsii.sinvoke(cls, "isUnresolved", [obj]))


class Tokenization(
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.Tokenization",
):
    '''Less oft-needed functions to manipulate Tokens.'''

    @jsii.member(jsii_name="isResolvable")
    @builtins.classmethod
    def is_resolvable(cls, obj: typing.Any) -> builtins.bool:
        '''Return whether the given object is an IResolvable object.

        This is different from Token.isUnresolved() which will also check for
        encoded Tokens, whereas this method will only do a type check on the given
        object.

        :param obj: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__40a96ccdbe485dab06de95cb233d33fad660624b380a8a8fb2344c6aaa56d74a)
            check_type(argname="argument obj", value=obj, expected_type=type_hints["obj"])
        return typing.cast(builtins.bool, jsii.sinvoke(cls, "isResolvable", [obj]))

    @jsii.member(jsii_name="resolve")
    @builtins.classmethod
    def resolve(
        cls,
        obj: typing.Any,
        *,
        resolver: ITokenResolver,
        scope: "IConstruct",
        preparing: typing.Optional[builtins.bool] = None,
    ) -> typing.Any:
        '''Resolves an object by evaluating all tokens and removing any undefined or empty objects or arrays.

        Values can only be primitives, arrays or tokens. Other objects (i.e. with methods) will be rejected.

        :param obj: The object to resolve.
        :param resolver: The resolver to apply to any resolvable tokens found.
        :param scope: The scope from which resolution is performed.
        :param preparing: Whether the resolution is being executed during the prepare phase or not. Default: false
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c89018313fbf500beba9c940ccfdded3a6dd1cb684bcf03e9daef7e54d3978fe)
            check_type(argname="argument obj", value=obj, expected_type=type_hints["obj"])
        options = ResolveOptions(resolver=resolver, scope=scope, preparing=preparing)

        return typing.cast(typing.Any, jsii.sinvoke(cls, "resolve", [obj, options]))

    @jsii.member(jsii_name="reverseList")
    @builtins.classmethod
    def reverse_list(
        cls,
        l: typing.Sequence[builtins.str],
    ) -> typing.Optional[IResolvable]:
        '''Un-encode a Tokenized value from a list.

        :param l: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9e55de9d18756386134ebce512c21523d92c378766278fc50534a8cd1668af16)
            check_type(argname="argument l", value=l, expected_type=type_hints["l"])
        return typing.cast(typing.Optional[IResolvable], jsii.sinvoke(cls, "reverseList", [l]))

    @jsii.member(jsii_name="reverseNumber")
    @builtins.classmethod
    def reverse_number(cls, n: jsii.Number) -> typing.Optional[IResolvable]:
        '''Un-encode a Tokenized value from a number.

        :param n: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e5e35a2fe0dd0bc9b2fdc457c232db0df1e729aec4917cfa407e15a0421c7439)
            check_type(argname="argument n", value=n, expected_type=type_hints["n"])
        return typing.cast(typing.Optional[IResolvable], jsii.sinvoke(cls, "reverseNumber", [n]))

    @jsii.member(jsii_name="reverseString")
    @builtins.classmethod
    def reverse_string(cls, s: builtins.str) -> "TokenizedStringFragments":
        '''Un-encode a string potentially containing encoded tokens.

        :param s: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4498b1ae96d2081b3636f64315f9a32e7d913a0ebb0c9043445603ef9c73ecfa)
            check_type(argname="argument s", value=s, expected_type=type_hints["s"])
        return typing.cast("TokenizedStringFragments", jsii.sinvoke(cls, "reverseString", [s]))

    @jsii.member(jsii_name="stringifyNumber")
    @builtins.classmethod
    def stringify_number(cls, x: jsii.Number) -> builtins.str:
        '''Stringify a number directly or lazily if it's a Token.

        If it is an object (i.e., { Ref: 'SomeLogicalId' }), return it as-is.

        :param x: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4baaf0fdb93d747169ccfac8fe3c052c1e366aaa3cf94c4c3ed6cf21994123fb)
            check_type(argname="argument x", value=x, expected_type=type_hints["x"])
        return typing.cast(builtins.str, jsii.sinvoke(cls, "stringifyNumber", [x]))


class TokenizedStringFragments(
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.TokenizedStringFragments",
):
    '''Fragments of a concatenated string containing stringified Tokens.'''

    def __init__(self) -> None:
        jsii.create(self.__class__, self, [])

    @jsii.member(jsii_name="addIntrinsic")
    def add_intrinsic(self, value: typing.Any) -> None:
        '''
        :param value: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__299944495831f0351a5c3fbe9fda834ddf89ee24168fc7a0f7401221decb1d5a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        return typing.cast(None, jsii.invoke(self, "addIntrinsic", [value]))

    @jsii.member(jsii_name="addLiteral")
    def add_literal(self, lit: typing.Any) -> None:
        '''
        :param lit: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2afff4a4b2f29e3e273f323f6b9d7e749e21718257d27356f4e9425c85d64467)
            check_type(argname="argument lit", value=lit, expected_type=type_hints["lit"])
        return typing.cast(None, jsii.invoke(self, "addLiteral", [lit]))

    @jsii.member(jsii_name="addToken")
    def add_token(self, token: IResolvable) -> None:
        '''
        :param token: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3e46e28eb8bebe2734ab7401ad99908b2f4d641e7cffad9589a1c9df06b57557)
            check_type(argname="argument token", value=token, expected_type=type_hints["token"])
        return typing.cast(None, jsii.invoke(self, "addToken", [token]))

    @jsii.member(jsii_name="join")
    def join(self, concat: IFragmentConcatenator) -> typing.Any:
        '''Combine the string fragments using the given joiner.

        If there are any

        :param concat: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c80dc9e0477ad2aef93147913606ac3e6d84dacc0d042dcdc512372c14420f07)
            check_type(argname="argument concat", value=concat, expected_type=type_hints["concat"])
        return typing.cast(typing.Any, jsii.invoke(self, "join", [concat]))

    @jsii.member(jsii_name="mapTokens")
    def map_tokens(self, mapper: ITokenMapper) -> "TokenizedStringFragments":
        '''Apply a transformation function to all tokens in the string.

        :param mapper: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__67ffc6b31d0552ac1f075e597446ec4e3590af7972656e2a81c0453e5d48f60f)
            check_type(argname="argument mapper", value=mapper, expected_type=type_hints["mapper"])
        return typing.cast("TokenizedStringFragments", jsii.invoke(self, "mapTokens", [mapper]))

    @builtins.property
    @jsii.member(jsii_name="firstValue")
    def first_value(self) -> typing.Any:
        return typing.cast(typing.Any, jsii.get(self, "firstValue"))

    @builtins.property
    @jsii.member(jsii_name="length")
    def length(self) -> jsii.Number:
        return typing.cast(jsii.Number, jsii.get(self, "length"))

    @builtins.property
    @jsii.member(jsii_name="tokens")
    def tokens(self) -> typing.List[IResolvable]:
        '''Return all Tokens from this string.'''
        return typing.cast(typing.List[IResolvable], jsii.get(self, "tokens"))

    @builtins.property
    @jsii.member(jsii_name="firstToken")
    def first_token(self) -> typing.Optional[IResolvable]:
        return typing.cast(typing.Optional[IResolvable], jsii.get(self, "firstToken"))


class TreeInspector(
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.TreeInspector",
):
    '''Inspector that maintains an attribute bag.'''

    def __init__(self) -> None:
        jsii.create(self.__class__, self, [])

    @jsii.member(jsii_name="addAttribute")
    def add_attribute(self, key: builtins.str, value: typing.Any) -> None:
        '''Adds attribute to bag.

        Keys should be added by convention to prevent conflicts

        :param key: - key for metadata.
        :param value: - value of metadata.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8160540b1b0781396fbb49de8909f485bc6847f12b06c284899426a5ba73d702)
            check_type(argname="argument key", value=key, expected_type=type_hints["key"])
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        return typing.cast(None, jsii.invoke(self, "addAttribute", [key, value]))

    @builtins.property
    @jsii.member(jsii_name="attributes")
    def attributes(self) -> typing.Mapping[builtins.str, typing.Any]:
        '''Represents the bag of attributes as key-value pairs.'''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "attributes"))


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-core.ValidationError",
    jsii_struct_bases=[],
    name_mapping={"message": "message", "source": "source"},
)
class ValidationError:
    def __init__(self, *, message: builtins.str, source: "Construct") -> None:
        '''An error returned during the validation phase.

        :param message: The error message.
        :param source: The construct which emitted the error.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__24c461a233468bdd35c3de4534cc3efeef61b40de176800f40e33fe5d9b63935)
            check_type(argname="argument message", value=message, expected_type=type_hints["message"])
            check_type(argname="argument source", value=source, expected_type=type_hints["source"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "message": message,
            "source": source,
        }

    @builtins.property
    def message(self) -> builtins.str:
        '''The error message.'''
        result = self._values.get("message")
        assert result is not None, "Required property 'message' is missing"
        return typing.cast(builtins.str, result)

    @builtins.property
    def source(self) -> "Construct":
        '''The construct which emitted the error.'''
        result = self._values.get("source")
        assert result is not None, "Required property 'source' is missing"
        return typing.cast("Construct", result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "ValidationError(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class ValidationResult(
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.ValidationResult",
):
    '''Representation of validation results.

    Models a tree of validation errors so that we have as much information as possible
    about the failure that occurred.
    '''

    def __init__(
        self,
        error_message: typing.Optional[builtins.str] = None,
        results: typing.Optional["ValidationResults"] = None,
    ) -> None:
        '''
        :param error_message: -
        :param results: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8464e23dc0647f104591d2538171583569e436394676dc7eacc14605f4bc6c6f)
            check_type(argname="argument error_message", value=error_message, expected_type=type_hints["error_message"])
            check_type(argname="argument results", value=results, expected_type=type_hints["results"])
        jsii.create(self.__class__, self, [error_message, results])

    @jsii.member(jsii_name="assertSuccess")
    def assert_success(self) -> None:
        '''Turn a failed validation into an exception.'''
        return typing.cast(None, jsii.invoke(self, "assertSuccess", []))

    @jsii.member(jsii_name="errorTree")
    def error_tree(self) -> builtins.str:
        '''Return a string rendering of the tree of validation failures.'''
        return typing.cast(builtins.str, jsii.invoke(self, "errorTree", []))

    @jsii.member(jsii_name="prefix")
    def prefix(self, message: builtins.str) -> "ValidationResult":
        '''Wrap this result with an error message, if it concerns an error.

        :param message: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__14b5bac0e79db41ff39720d1056b6d3ad3381b18f0245a6992c93703c07bc82f)
            check_type(argname="argument message", value=message, expected_type=type_hints["message"])
        return typing.cast("ValidationResult", jsii.invoke(self, "prefix", [message]))

    @builtins.property
    @jsii.member(jsii_name="errorMessage")
    def error_message(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "errorMessage"))

    @builtins.property
    @jsii.member(jsii_name="isSuccess")
    def is_success(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "isSuccess"))

    @builtins.property
    @jsii.member(jsii_name="results")
    def results(self) -> "ValidationResults":
        return typing.cast("ValidationResults", jsii.get(self, "results"))


class ValidationResults(
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.ValidationResults",
):
    '''A collection of validation results.'''

    def __init__(
        self,
        results: typing.Optional[typing.Sequence[ValidationResult]] = None,
    ) -> None:
        '''
        :param results: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d22e62cd44b29ae7387d4d18bcbc2e8767111e1b9f70ad6d9bbaaa972ec3b410)
            check_type(argname="argument results", value=results, expected_type=type_hints["results"])
        jsii.create(self.__class__, self, [results])

    @jsii.member(jsii_name="collect")
    def collect(self, result: ValidationResult) -> None:
        '''
        :param result: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ee64811eef3876aca433a599fde8c5d35b893f421e7c1492cdbaf75d4a580c38)
            check_type(argname="argument result", value=result, expected_type=type_hints["result"])
        return typing.cast(None, jsii.invoke(self, "collect", [result]))

    @jsii.member(jsii_name="errorTreeList")
    def error_tree_list(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.invoke(self, "errorTreeList", []))

    @jsii.member(jsii_name="wrap")
    def wrap(self, message: builtins.str) -> ValidationResult:
        '''Wrap up all validation results into a single tree node.

        If there are failures in the collection, add a message, otherwise
        return a success.

        :param message: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__097ed477d8f3d33cc0e8be9230f76e3de9bcc8e9f3f4aa640fb62bd5ea9e213c)
            check_type(argname="argument message", value=message, expected_type=type_hints["message"])
        return typing.cast(ValidationResult, jsii.invoke(self, "wrap", [message]))

    @builtins.property
    @jsii.member(jsii_name="isSuccess")
    def is_success(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "isSuccess"))

    @builtins.property
    @jsii.member(jsii_name="results")
    def results(self) -> typing.List[ValidationResult]:
        return typing.cast(typing.List[ValidationResult], jsii.get(self, "results"))

    @results.setter
    def results(self, value: typing.List[ValidationResult]) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4403f3c33afef1e6ba1ccbadc87ac1ddd05aae6b7a400b3cbd85a043d7d85462)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "results", value)


@jsii.implements(IDependable)
class ConcreteDependable(
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.ConcreteDependable",
):
    '''(experimental) A set of constructs to be used as a dependable.

    This class can be used when a set of constructs which are disjoint in the
    construct tree needs to be combined to be used as a single dependable.

    :stability: experimental
    '''

    def __init__(self) -> None:
        '''
        :stability: experimental
        '''
        jsii.create(self.__class__, self, [])

    @jsii.member(jsii_name="add")
    def add(self, construct: "IConstruct") -> None:
        '''(experimental) Add a construct to the dependency roots.

        :param construct: -

        :stability: experimental
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2aff3187c70abf274ed13cd4a3f2e4998d0f0992886e51edb0da1d043b8c4479)
            check_type(argname="argument construct", value=construct, expected_type=type_hints["construct"])
        return typing.cast(None, jsii.invoke(self, "add", [construct]))


@jsii.implements(IStackSynthesizer)
class DefaultStackSynthesizer(
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.DefaultStackSynthesizer",
):
    '''Uses conventionally named roles and reify asset storage locations.'''

    def __init__(self) -> None:
        jsii.create(self.__class__, self, [])

    @jsii.member(jsii_name="bind")
    def bind(self, stack: "Stack") -> None:
        '''Bind to the stack this environment is going to be used on.

        Must be called before any of the other methods are called.

        :param stack: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__056834e8ea5e467b3e578dab4687464feb942970071b2e92b431cb79e887b6e4)
            check_type(argname="argument stack", value=stack, expected_type=type_hints["stack"])
        return typing.cast(None, jsii.invoke(self, "bind", [stack]))

    @jsii.member(jsii_name="synthesizeStackArtifacts")
    def synthesize_stack_artifacts(self, session: ISynthesisSession) -> None:
        '''Synthesize all artifacts required for the stack into the session.

        :param session: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c57938c57f0e21ffd21d8acfc12cedae1a940974abf5c9d97f6e3a44fef3f31a)
            check_type(argname="argument session", value=session, expected_type=type_hints["session"])
        return typing.cast(None, jsii.invoke(self, "synthesizeStackArtifacts", [session]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="DEFAULT_QUALIFIER")
    def DEFAULT_QUALIFIER(cls) -> builtins.str:
        '''Default ARN qualifier.'''
        return typing.cast(builtins.str, jsii.sget(cls, "DEFAULT_QUALIFIER"))

    @builtins.property
    @jsii.member(jsii_name="stack")
    def _stack(self) -> typing.Optional["Stack"]:
        return typing.cast(typing.Optional["Stack"], jsii.get(self, "stack"))


@jsii.implements(ITokenResolver)
class DefaultTokenResolver(
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.DefaultTokenResolver",
):
    '''(experimental) Default resolver implementation.

    :stability: experimental
    '''

    def __init__(self, concat: IFragmentConcatenator) -> None:
        '''
        :param concat: -

        :stability: experimental
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9727b4179c0e167b591e6d6381af6777aa5c0bc173a9be06c520752e6276a79b)
            check_type(argname="argument concat", value=concat, expected_type=type_hints["concat"])
        jsii.create(self.__class__, self, [concat])

    @jsii.member(jsii_name="resolveList")
    def resolve_list(
        self,
        xs: typing.Sequence[builtins.str],
        context: IResolveContext,
    ) -> typing.Any:
        '''(experimental) Resolve a tokenized list.

        :param xs: -
        :param context: -

        :stability: experimental
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__216b9096fbe63ca7f074fc29e40563204d6f77fcf26ca8d257635a47aaf5654c)
            check_type(argname="argument xs", value=xs, expected_type=type_hints["xs"])
            check_type(argname="argument context", value=context, expected_type=type_hints["context"])
        return typing.cast(typing.Any, jsii.invoke(self, "resolveList", [xs, context]))

    @jsii.member(jsii_name="resolveString")
    def resolve_string(
        self,
        fragments: TokenizedStringFragments,
        context: IResolveContext,
    ) -> typing.Any:
        '''(experimental) Resolve string fragments to Tokens.

        :param fragments: -
        :param context: -

        :stability: experimental
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__94afe6ae9a614e95657ec50260cbe8a8f37f3334a6f8e36774cc6d50076adce9)
            check_type(argname="argument fragments", value=fragments, expected_type=type_hints["fragments"])
            check_type(argname="argument context", value=context, expected_type=type_hints["context"])
        return typing.cast(typing.Any, jsii.invoke(self, "resolveString", [fragments, context]))

    @jsii.member(jsii_name="resolveToken")
    def resolve_token(
        self,
        t: IResolvable,
        context: IResolveContext,
        post_processor: IPostProcessor,
    ) -> typing.Any:
        '''(experimental) Default Token resolution.

        Resolve the Token, recurse into whatever it returns,
        then finally post-process it.

        :param t: -
        :param context: -
        :param post_processor: -

        :stability: experimental
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c53a6ef11bc0db98771275f3ebe02ae5f19946dcc1e5c5d6d3b3d064bc41fc0c)
            check_type(argname="argument t", value=t, expected_type=type_hints["t"])
            check_type(argname="argument context", value=context, expected_type=type_hints["context"])
            check_type(argname="argument post_processor", value=post_processor, expected_type=type_hints["post_processor"])
        return typing.cast(typing.Any, jsii.invoke(self, "resolveToken", [t, context, post_processor]))


class FnAdd(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnAdd",
):
    def __init__(self, values: typing.Any) -> None:
        '''Creates an ``Add`` function.

        :param values: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__686e2b42bbe4af2a65edd2cbf32a76d1c722ba8453b459409936c8b9aa9fbf03)
            check_type(argname="argument values", value=values, expected_type=type_hints["values"])
        jsii.create(self.__class__, self, [values])


@jsii.implements(IRosConditionExpression)
class FnAnd(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnAnd",
):
    '''Returns true if all the specified conditions evaluate to true, or returns false if any one   of the conditions evaluates to false.

    ``Fn::And`` acts as an AND operator. The minimum number of
    conditions that you can include is 2, and the maximum is 10.
    '''

    def __init__(
        self,
        *condition: typing.Union[builtins.str, IRosConditionExpression],
    ) -> None:
        '''
        :param condition: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__45110e0d6534b98ed8e6e9281dc23a01599642f85573bf97ad8d584b97f59491)
            check_type(argname="argument condition", value=condition, expected_type=typing.Tuple[type_hints["condition"], ...]) # pyright: ignore [reportGeneralTypeIssues]
        jsii.create(self.__class__, self, [*condition])


class FnAvg(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnAvg",
):
    def __init__(self, value: typing.Any) -> None:
        '''Creates an ``Avg`` function.

        :param value: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b9524542b26c45613494832a6e6412d4cdfe45869ceeabd7ee930da6b0ef7ef6)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.create(self.__class__, self, [value])


class FnBase64Decode(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnBase64Decode",
):
    def __init__(self, data: typing.Any) -> None:
        '''
        :param data: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__52065ec56e8eae2266f840354d908795d211fda0f7050a5d39c062982a080ba9)
            check_type(argname="argument data", value=data, expected_type=type_hints["data"])
        jsii.create(self.__class__, self, [data])


class FnBase64Encode(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnBase64Encode",
):
    '''The intrinsic function ``Fn::Base64`` returns the Base64 representation of the input string.'''

    def __init__(self, data: typing.Any) -> None:
        '''Creates an ``Fn::Base64`` function.

        :param data: The string value you want to convert to Base64.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__40e0d55844e1804e912770b8e7c076cfb38b59071e09baebb42b3e5e0e337fe0)
            check_type(argname="argument data", value=data, expected_type=type_hints["data"])
        jsii.create(self.__class__, self, [data])


class FnCalculate(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnCalculate",
):
    def __init__(self, value: typing.Any) -> None:
        '''Creates an ``Calculate`` function.

        :param value: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__26465fde8e7163abd6f7cb2de91952795d430f22b34a8d6cf28a0ef4761de891)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.create(self.__class__, self, [value])


@jsii.implements(IRosConditionExpression)
class FnEquals(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnEquals",
):
    '''Compares if two values are equal.

    Returns true if the two values are equal or false
    if they aren't.
    '''

    def __init__(self, lhs: typing.Any, rhs: typing.Any) -> None:
        '''Creates an ``Fn::Equals`` condition function.

        :param lhs: A value of any type that you want to compare.
        :param rhs: A value of any type that you want to compare.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b3cc295f516f290459b1196f5b3f00e46e3c192dc4ac112e357e96a209e33fad)
            check_type(argname="argument lhs", value=lhs, expected_type=type_hints["lhs"])
            check_type(argname="argument rhs", value=rhs, expected_type=type_hints["rhs"])
        jsii.create(self.__class__, self, [lhs, rhs])


class FnFindInMap(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnFindInMap",
):
    '''The intrinsic function ``Fn::FindInMap`` returns the value corresponding to keys in a two-level map that is declared in the Mappings section.'''

    def __init__(self, value: typing.Any) -> None:
        '''Creates an ``Fn::FindInMap`` function.

        param mapName The logical name of a mapping declared in the Mappings section that contains the keys and values.
        param topLevelKey The top-level key name. Its value is a list of key-value pairs.
        param secondLevelKey The second-level key name, which is set to one of the keys from the list assigned to TopLevelKey.

        :param value: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__dd98760b6a01e88e5ed5377b56f290262fd96f6703c0328839b0e0668e6ddafa)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.create(self.__class__, self, [value])


class FnGetAZs(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnGetAZs",
):
    '''The intrinsic function ``Fn::GetAZs`` returns an array that lists Availability Zones for a specified region.

    Because customers have access to different Availability Zones, the intrinsic
    function ``Fn::GetAZs`` enables template authors to write templates that adapt to the calling
    user's access. That way you don't have to hard-code a full list of Availability Zones for a
    specified region.
    '''

    def __init__(self, region: typing.Any) -> None:
        '''Creates an ``Fn::GetAZs`` function.

        :param region: The name of the region for which you want to get the Availability Zones.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__99a58fd57d7de4274f57bce0fac8696676b644b6bd94046816eaa33980856884)
            check_type(argname="argument region", value=region, expected_type=type_hints["region"])
        jsii.create(self.__class__, self, [region])


class FnGetAtt(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnGetAtt",
):
    '''The ``Fn::GetAtt`` intrinsic function returns the value of an attribute from a resource in the template.'''

    def __init__(
        self,
        logical_name_of_resource: builtins.str,
        attribute_name: builtins.str,
    ) -> None:
        '''Creates a ``Fn::GetAtt`` function.

        :param logical_name_of_resource: The logical name (also called logical ID) of the resource that contains the attribute that you want.
        :param attribute_name: The name of the resource-specific attribute whose value you want. See the resource's reference page for details about the attributes available for that resource type.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0bf228358201491aaacfb32677b98c44e0d2791cbef92d2c13a4a1b612a88544)
            check_type(argname="argument logical_name_of_resource", value=logical_name_of_resource, expected_type=type_hints["logical_name_of_resource"])
            check_type(argname="argument attribute_name", value=attribute_name, expected_type=type_hints["attribute_name"])
        jsii.create(self.__class__, self, [logical_name_of_resource, attribute_name])


class FnGetJsonValue(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnGetJsonValue",
):
    def __init__(self, value: typing.Any) -> None:
        '''Creates an ``GetJsonValue`` function.

        :param value: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5a2e3c1b3ac88b16338cbf206af8919482beb8d247ee3ff3215f49de03ddf0de)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.create(self.__class__, self, [value])


class FnGetStackOutput(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnGetStackOutput",
):
    def __init__(self, value: typing.Any) -> None:
        '''Creates an ``GetStackOutput`` function.

        :param value: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__16e5baaf8cdfb71cdcdc61ee86e19fbe34de66252cc13ec6e10d05b56b2cae67)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.create(self.__class__, self, [value])


@jsii.implements(IRosConditionExpression)
class FnIf(Intrinsic, metaclass=jsii.JSIIMeta, jsii_type="@alicloud/ros-cdk-core.FnIf"):
    '''Returns one value if the specified condition evaluates to true and another value if the specified condition evaluates to false.'''

    def __init__(
        self,
        condition: typing.Union[builtins.str, IRosConditionExpression],
        value_if_true: typing.Any,
        value_if_false: typing.Any,
    ) -> None:
        '''Creates an ``Fn::If`` condition function.

        :param condition: A reference to a condition in the Conditions section. Use the condition's name to reference it.
        :param value_if_true: A value to be returned if the specified condition evaluates to true.
        :param value_if_false: A value to be returned if the specified condition evaluates to false.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bd45b41054d6fd402e50eb7829f1b272ebdac9695a6aa57470cb2b3361cd658f)
            check_type(argname="argument condition", value=condition, expected_type=type_hints["condition"])
            check_type(argname="argument value_if_true", value=value_if_true, expected_type=type_hints["value_if_true"])
            check_type(argname="argument value_if_false", value=value_if_false, expected_type=type_hints["value_if_false"])
        jsii.create(self.__class__, self, [condition, value_if_true, value_if_false])


@jsii.implements(IResolvable)
class FnJoin(metaclass=jsii.JSIIMeta, jsii_type="@alicloud/ros-cdk-core.FnJoin"):
    '''The intrinsic function ``Fn::Join`` appends a set of values into a single value, separated by the specified delimiter.

    If a delimiter is the empty string, the set of values are concatenated
    with no delimiter.
    '''

    def __init__(
        self,
        delimiter: builtins.str,
        list_of_values: typing.Sequence[typing.Any],
    ) -> None:
        '''Creates an ``Fn::Join`` function.

        :param delimiter: The value you want to occur between fragments. The delimiter will occur between fragments only. It will not terminate the final value.
        :param list_of_values: The list of values you want combined.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e0122df383b5bc5fa6367cdb94a99ac0174bb8f1f325bd5ed5b2f6ecc4dca2a6)
            check_type(argname="argument delimiter", value=delimiter, expected_type=type_hints["delimiter"])
            check_type(argname="argument list_of_values", value=list_of_values, expected_type=type_hints["list_of_values"])
        jsii.create(self.__class__, self, [delimiter, list_of_values])

    @jsii.member(jsii_name="resolve")
    def resolve(self, context: IResolveContext) -> typing.Any:
        '''Produce the Token's value at resolution time.

        :param context: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__61ef76dd29f6e730b8a873263bec53e01d984484dab8e4c18002a13641acee47)
            check_type(argname="argument context", value=context, expected_type=type_hints["context"])
        return typing.cast(typing.Any, jsii.invoke(self, "resolve", [context]))

    @jsii.member(jsii_name="toJSON")
    def to_json(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.invoke(self, "toJSON", []))

    @jsii.member(jsii_name="toString")
    def to_string(self) -> builtins.str:
        '''Return a string representation of this resolvable object.

        Returns a reversible string representation.
        '''
        return typing.cast(builtins.str, jsii.invoke(self, "toString", []))

    @builtins.property
    @jsii.member(jsii_name="creationStack")
    def creation_stack(self) -> typing.List[builtins.str]:
        '''The creation stack of this resolvable which will be appended to errors thrown during resolution.

        If this returns an empty array the stack will not be attached.
        '''
        return typing.cast(typing.List[builtins.str], jsii.get(self, "creationStack"))


class FnJq(Intrinsic, metaclass=jsii.JSIIMeta, jsii_type="@alicloud/ros-cdk-core.FnJq"):
    def __init__(self, value: typing.Any) -> None:
        '''Creates an ``Jq`` function.

        :param value: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8eb62c800fcae67b10a7b5c30ccb3c039f73b92a810339966810785336b14d0e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.create(self.__class__, self, [value])


class FnListMerge(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnListMerge",
):
    def __init__(self, value: typing.Any) -> None:
        '''Creates an ``ListMerge`` function.

        :param value: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e8c35bdce19ff8d2ea687c9a63e379a6babcc6ff8119fd475f25f1b5ea1c25ee)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.create(self.__class__, self, [value])


class FnMax(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnMax",
):
    def __init__(self, values: typing.Any) -> None:
        '''Creates an ``Max`` function.

        :param values: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9c01b3caf582f9af877e56cc694bb360a2085322725b78786274d824cdaf2072)
            check_type(argname="argument values", value=values, expected_type=type_hints["values"])
        jsii.create(self.__class__, self, [values])


class FnMergeMapToList(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnMergeMapToList",
):
    def __init__(self, map_list: typing.Any) -> None:
        '''Creates an ``FnMergeMapToList`` function.

        :param map_list: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a615ab5ca96cf38319d0e6b4a376abfa40a4feb616ea507c962ee6cb7b1690bd)
            check_type(argname="argument map_list", value=map_list, expected_type=type_hints["map_list"])
        jsii.create(self.__class__, self, [map_list])


class FnMin(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnMin",
):
    def __init__(self, values: typing.Any) -> None:
        '''Creates an ``Min`` function.

        :param values: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b9b3bd114c9b3dc0c6ac49a5be7ec7f0bcbbb1ff5fa2912854055f81c5b00296)
            check_type(argname="argument values", value=values, expected_type=type_hints["values"])
        jsii.create(self.__class__, self, [values])


@jsii.implements(IRosConditionExpression)
class FnNot(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnNot",
):
    '''Returns true for a condition that evaluates to false or returns false for a condition that evaluates to true.

    ``Fn::Not`` acts as a NOT operator.
    '''

    def __init__(
        self,
        condition: typing.Union[builtins.str, IRosConditionExpression],
    ) -> None:
        '''Creates an ``Fn::Not`` condition function.

        :param condition: A condition such as ``Fn::Equals`` that evaluates to true or false.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aa8f0c940a166a4c70ea31088c6453e4302d5d801015d2550db27f2ec81e930b)
            check_type(argname="argument condition", value=condition, expected_type=type_hints["condition"])
        jsii.create(self.__class__, self, [condition])


@jsii.implements(IRosConditionExpression)
class FnOr(Intrinsic, metaclass=jsii.JSIIMeta, jsii_type="@alicloud/ros-cdk-core.FnOr"):
    '''Returns true if any one of the specified conditions evaluate to true, or returns false if all of the conditions evaluates to false.

    ``Fn::Or`` acts as an OR operator. The minimum number
    of conditions that you can include is 2, and the maximum is 10.
    '''

    def __init__(
        self,
        *condition: typing.Union[builtins.str, IRosConditionExpression],
    ) -> None:
        '''Creates an ``Fn::Or`` condition function.

        :param condition: A condition that evaluates to true or false.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__adf2e03c690c3cb28b74e88982a4889d3b0d5b54d92b5a3556624ce9a9f7fd8a)
            check_type(argname="argument condition", value=condition, expected_type=typing.Tuple[type_hints["condition"], ...]) # pyright: ignore [reportGeneralTypeIssues]
        jsii.create(self.__class__, self, [*condition])


class FnRef(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnRef",
):
    '''The intrinsic function ``Ref`` returns the value of the specified parameter or resource.

    When you specify a parameter's logical name, it returns the value of the parameter.
    When you specify a resource's logical name, it returns a value that you can typically use to refer to that resource, such as a physical ID.
    '''

    def __init__(self, logical_name: builtins.str) -> None:
        '''Creates an ``Ref`` function.

        :param logical_name: The logical name of a parameter/resource for which you want to retrieve its value.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__61889f70542841a7dcc6f9a86f78d58f369a603f32fea0e24af9a0038e420cf1)
            check_type(argname="argument logical_name", value=logical_name, expected_type=type_hints["logical_name"])
        jsii.create(self.__class__, self, [logical_name])


class FnReplace(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnReplace",
):
    def __init__(self, value: typing.Any) -> None:
        '''Creates an ``Replace`` function.

        :param value: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0250eb79836dc506c39f785b743b8af41f55a581763ad1190d251682df8b0555)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.create(self.__class__, self, [value])


class FnSelect(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnSelect",
):
    '''The intrinsic function ``Fn::Select`` returns a single object from a list of objects by index.'''

    def __init__(self, value: typing.Any) -> None:
        '''Creates an ``Fn::Select`` function.

        param index The index of the object to retrieve. This must be a value from zero to N-1, where N represents the number of elements in the array.
        param array The list of objects to select from. This list must not be null, nor can it have null entries.

        :param value: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__29fbee6c85e18606ce841248ed899786d11cbeef5717939d92fbf8662a5a02e5)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.create(self.__class__, self, [value])


class FnSelectMapList(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnSelectMapList",
):
    def __init__(self, value: typing.Any) -> None:
        '''Creates an ``FnMergeMapToList`` function.

        :param value: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7943bda42cbb6b91580503ce70079765bd1027495853a52b7c78d1715d76e8ef)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.create(self.__class__, self, [value])


class FnSplit(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnSplit",
):
    '''To split a string into a list of string values so that you can select an element from the resulting string list, use the ``Fn::Split`` intrinsic function.

    Specify the location of splits
    with a delimiter, such as , (a comma). After you split a string, use the ``Fn::Select`` function
    to pick a specific element.
    '''

    def __init__(self, value: typing.Any) -> None:
        '''Create an ``Fn::Split`` function.

        param delimiter A string value that determines where the source string is divided.
        param source The string value that you want to split.

        :param value: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2102430162bd15106fa9023902fbaf95aa0321bdc3212c478770febe2a0dc945)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.create(self.__class__, self, [value])


class FnStr(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnStr",
):
    def __init__(self, value: typing.Any) -> None:
        '''Creates an ``Str`` function.

        :param value: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b00749cf94b050e10d4ab91960af1d49a86a78183b31830079457c840eb9cb2f)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.create(self.__class__, self, [value])


class FnSub(
    Intrinsic,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.FnSub",
):
    '''The intrinsic function ``Fn::Sub`` substitutes variables in an input string with values that you specify.

    In your templates, you can use this function to construct commands or outputs
    that include values that aren't available until you create or update a stack.
    '''

    def __init__(self, value: typing.Any) -> None:
        '''Creates an ``Fn::Sub`` function.

        param body A string with variables that Ros Template substitutes with their
        associated values at runtime. Write variables as ${MyVarName}. Variables
        can be template parameter names, resource logical IDs, resource attributes,
        or a variable in a key-value map. If you specify only template parameter names,
        resource logical IDs, and resource attributes, don't specify a key-value map.
        param variables The name of a variable that you included in the String parameter.
        The value that Ros Template substitutes for the associated variable name at runtime.

        :param value: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1d91ade8c7dd39fea016dc553268e72b597d83596b15dfa5cf4baa2671204f76)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.create(self.__class__, self, [value])


@jsii.interface(jsii_type="@alicloud/ros-cdk-core.IConstruct")
class IConstruct(
    _constructs_77d1e7e8.IConstruct,
    IDependable,
    typing_extensions.Protocol,
):
    '''Represents a construct.'''

    @builtins.property
    @jsii.member(jsii_name="node")
    def node(self) -> ConstructNode:
        '''The construct tree node for this construct.'''
        ...


class _IConstructProxy(
    jsii.proxy_for(_constructs_77d1e7e8.IConstruct), # type: ignore[misc]
    jsii.proxy_for(IDependable), # type: ignore[misc]
):
    '''Represents a construct.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-core.IConstruct"

    @builtins.property
    @jsii.member(jsii_name="node")
    def node(self) -> ConstructNode:
        '''The construct tree node for this construct.'''
        return typing.cast(ConstructNode, jsii.get(self, "node"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IConstruct).__jsii_proxy_class__ = lambda : _IConstructProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-core.IResource")
class IResource(IConstruct, typing_extensions.Protocol):
    '''Interface for the Resource construct.'''

    @builtins.property
    @jsii.member(jsii_name="stack")
    def stack(self) -> "Stack":
        '''The stack in which this resource is defined.'''
        ...


class _IResourceProxy(
    jsii.proxy_for(IConstruct), # type: ignore[misc]
):
    '''Interface for the Resource construct.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-core.IResource"

    @builtins.property
    @jsii.member(jsii_name="stack")
    def stack(self) -> "Stack":
        '''The stack in which this resource is defined.'''
        return typing.cast("Stack", jsii.get(self, "stack"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IResource).__jsii_proxy_class__ = lambda : _IResourceProxy


@jsii.implements(IConstruct)
class Construct(
    _constructs_77d1e7e8.Construct,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.Construct",
):
    '''Represents the building block of the construct graph.

    All constructs besides the root construct must be created within the scope of
    another construct.
    '''

    def __init__(self, scope: "Construct", id: builtins.str) -> None:
        '''
        :param scope: -
        :param id: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5ecfb8f7a776d0de65e015ad8172e9f8a178dfc04f8dec1b2457d86c1bcce877)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
        jsii.create(self.__class__, self, [scope, id])

    @jsii.member(jsii_name="isConstruct")
    @builtins.classmethod
    def is_construct(cls, x: typing.Any) -> builtins.bool:
        '''Return whether the given object is a Construct.

        :param x: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d81f1bc767e0d25084ea165ce16fa1c230bffea60cbe788385d3a0c0464589a7)
            check_type(argname="argument x", value=x, expected_type=type_hints["x"])
        return typing.cast(builtins.bool, jsii.sinvoke(cls, "isConstruct", [x]))

    @jsii.member(jsii_name="onPrepare")
    def _on_prepare(self) -> None:
        '''Perform final modifications before synthesis.

        This method can be implemented by derived constructs in order to perform
        final changes before synthesis. prepare() will be called after child
        constructs have been prepared.

        This is an advanced framework feature. Only use this if you
        understand the implications.
        '''
        return typing.cast(None, jsii.invoke(self, "onPrepare", []))

    @jsii.member(jsii_name="onSynthesize")
    def _on_synthesize(self, session: _constructs_77d1e7e8.ISynthesisSession) -> None:
        '''Allows this construct to emit artifacts into the cloud assembly during synthesis.

        This method is usually implemented by framework-level constructs such as ``Stack`` and ``Asset``
        as they participate in synthesizing the cloud assembly.

        :param session: The synthesis session.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4197923b6ab33eb87eae536a39bd7d210a48cd7dc85d241d4a8085cdf3f7dc33)
            check_type(argname="argument session", value=session, expected_type=type_hints["session"])
        return typing.cast(None, jsii.invoke(self, "onSynthesize", [session]))

    @jsii.member(jsii_name="onValidate")
    def _on_validate(self) -> typing.List[builtins.str]:
        '''Validate the current construct.

        This method can be implemented by derived constructs in order to perform
        validation logic. It is called on all constructs before synthesis.

        :return: An array of validation error messages, or an empty array if the construct is valid.
        '''
        return typing.cast(typing.List[builtins.str], jsii.invoke(self, "onValidate", []))

    @jsii.member(jsii_name="prepare")
    def _prepare(self) -> None:
        '''Perform final modifications before synthesis.

        This method can be implemented by derived constructs in order to perform
        final changes before synthesis. prepare() will be called after child
        constructs have been prepared.

        This is an advanced framework feature. Only use this if you
        understand the implications.
        '''
        return typing.cast(None, jsii.invoke(self, "prepare", []))

    @jsii.member(jsii_name="synthesize")
    def _synthesize(self, session: ISynthesisSession) -> None:
        '''Allows this construct to emit artifacts into the cloud assembly during synthesis.

        This method is usually implemented by framework-level constructs such as ``Stack`` and ``Asset``
        as they participate in synthesizing the cloud assembly.

        :param session: The synthesis session.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2f7caf605f353ebe34c5a2ec53efdef2cfa7107d02aeed0f97d720b59659e706)
            check_type(argname="argument session", value=session, expected_type=type_hints["session"])
        return typing.cast(None, jsii.invoke(self, "synthesize", [session]))

    @jsii.member(jsii_name="validate")
    def _validate(self) -> typing.List[builtins.str]:
        '''Validate the current construct.

        This method can be implemented by derived constructs in order to perform
        validation logic. It is called on all constructs before synthesis.

        :return: An array of validation error messages, or an empty array if the construct is valid.
        '''
        return typing.cast(typing.List[builtins.str], jsii.invoke(self, "validate", []))

    @builtins.property
    @jsii.member(jsii_name="node")
    def node(self) -> ConstructNode:
        '''The construct tree node associated with this construct.'''
        return typing.cast(ConstructNode, jsii.get(self, "node"))


@jsii.implements(IResource)
class Resource(
    Construct,
    metaclass=jsii.JSIIAbstractClass,
    jsii_type="@alicloud/ros-cdk-core.Resource",
):
    '''A construct which represents a resource.'''

    def __init__(
        self,
        scope: Construct,
        id: builtins.str,
        *,
        physical_name: typing.Optional[builtins.str] = None,
    ) -> None:
        '''
        :param scope: -
        :param id: -
        :param physical_name: The value passed in by users to the physical name prop of the resource. - ``undefined`` implies that a physical name will be allocated during deployment. - a concrete value implies a specific physical name - ``PhysicalName.GENERATE_IF_NEEDED`` is a marker that indicates that a physical will only be generated by the CDK if it is needed for cross-environment references. Otherwise, it will be allocated. Default: - The physical name will be allocated at deployment time
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__033bb68d0358ede779f4100fe0f171f4f4096ee9aaa265cd7450816e13f088d8)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
        props = ResourceProps(physical_name=physical_name)

        jsii.create(self.__class__, self, [scope, id, props])

    @jsii.member(jsii_name="addCondition")
    def add_condition(self, condition: "RosCondition") -> None:
        '''
        :param condition: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0aa8adb2d892faa138aee5c2af9a6cbbbfc9d54b43889d0799eebf9400b57059)
            check_type(argname="argument condition", value=condition, expected_type=type_hints["condition"])
        return typing.cast(None, jsii.invoke(self, "addCondition", [condition]))

    @jsii.member(jsii_name="addCount")
    def add_count(self, count: typing.Union[jsii.Number, IResolvable]) -> None:
        '''
        :param count: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9a26f834a04528bb7b9d99cd6a3b1c1f5afa6975f3da82cac68b4b711b4c0f75)
            check_type(argname="argument count", value=count, expected_type=type_hints["count"])
        return typing.cast(None, jsii.invoke(self, "addCount", [count]))

    @jsii.member(jsii_name="addDependency")
    def add_dependency(self, resource: "Resource") -> None:
        '''
        :param resource: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__72092dbfe054fc98599cfa5aeeb4d43af094fa113e4c033759d9d0e9e97c531c)
            check_type(argname="argument resource", value=resource, expected_type=type_hints["resource"])
        return typing.cast(None, jsii.invoke(self, "addDependency", [resource]))

    @jsii.member(jsii_name="addResourceDesc")
    def add_resource_desc(self, desc: builtins.str) -> None:
        '''
        :param desc: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d2de7567d682f0d1123dbb1b9b79114ec2ae9f54c7129f94c03a3d2eda6e46f0)
            check_type(argname="argument desc", value=desc, expected_type=type_hints["desc"])
        return typing.cast(None, jsii.invoke(self, "addResourceDesc", [desc]))

    @jsii.member(jsii_name="applyRemovalPolicy")
    def apply_removal_policy(self, policy: RemovalPolicy) -> None:
        '''
        :param policy: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c6f59019a6cdb5178ab386365e04a087fe7d1567a3b3f2ad94de5f8bdf660ae7)
            check_type(argname="argument policy", value=policy, expected_type=type_hints["policy"])
        return typing.cast(None, jsii.invoke(self, "applyRemovalPolicy", [policy]))

    @jsii.member(jsii_name="generatePhysicalName")
    def _generate_physical_name(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.invoke(self, "generatePhysicalName", []))

    @jsii.member(jsii_name="getAtt")
    def get_att(self, name: builtins.str) -> IResolvable:
        '''
        :param name: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5e2160cb5dc7359592892c674d564da7c8414d648c824034201bd3dd82ec0bec)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
        return typing.cast(IResolvable, jsii.invoke(self, "getAtt", [name]))

    @jsii.member(jsii_name="setMetadata")
    def set_metadata(self, key: builtins.str, value: typing.Any) -> None:
        '''
        :param key: -
        :param value: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6a9029d185d924daa02b18c58064fef6c16d7b34e4f28fccbe1b8eab51797cd4)
            check_type(argname="argument key", value=key, expected_type=type_hints["key"])
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        return typing.cast(None, jsii.invoke(self, "setMetadata", [key, value]))

    @builtins.property
    @jsii.member(jsii_name="physicalName")
    def _physical_name(self) -> builtins.str:
        '''(experimental) Returns a string-encoded token that resolves to the physical name that should be passed to the ROS resource.

        This value will resolve to one of the following:

        - a concrete value (e.g. ``"my-awesome-bucket"``)
        - ``undefined``, when a name should be generated by ROS
        - a concrete name generated automatically during synthesis, in
          cross-environment scenarios.

        :stability: experimental
        '''
        return typing.cast(builtins.str, jsii.get(self, "physicalName"))

    @builtins.property
    @jsii.member(jsii_name="stack")
    def stack(self) -> "Stack":
        '''The stack in which this resource is defined.'''
        return typing.cast("Stack", jsii.get(self, "stack"))

    @builtins.property
    @jsii.member(jsii_name="resource")
    def resource(self) -> typing.Optional["RosResource"]:
        return typing.cast(typing.Optional["RosResource"], jsii.get(self, "resource"))

    @resource.setter
    def resource(self, value: typing.Optional["RosResource"]) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f9d9dbf8b7f0d7f6cdf67a80e6264fd20b981f29db775ecb90841534c8fff724)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "resource", value)


class _ResourceProxy(Resource):
    pass

# Adding a "__jsii_proxy_class__(): typing.Type" function to the abstract class
typing.cast(typing.Any, Resource).__jsii_proxy_class__ = lambda : _ResourceProxy


class RosElement(
    Construct,
    metaclass=jsii.JSIIAbstractClass,
    jsii_type="@alicloud/ros-cdk-core.RosElement",
):
    '''An element of a stack.'''

    def __init__(self, scope: Construct, id: builtins.str) -> None:
        '''Creates an entity and binds it to a tree.

        Note that the root of the tree must be a Stack object (not just any Root).

        :param scope: The parent construct.
        :param id: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__47cdb0909e8e294d54ce6c8ae50dfb95c5fdf1709eb8ea16fdce2ef2e8f73e7b)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
        jsii.create(self.__class__, self, [scope, id])

    @jsii.member(jsii_name="isRosElement")
    @builtins.classmethod
    def is_ros_element(cls, x: typing.Any) -> builtins.bool:
        '''Returns ``true`` if a construct is a stack element (i.e. part of the synthesized template).

        Uses duck-typing instead of ``instanceof`` to allow stack elements from different
        versions of this library to be included in the same stack.

        :param x: -

        :return: The construct as a stack element or undefined if it is not a stack element.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3d40a5c72ddbab2cda8b7e6ef044a141113184fda4c3aa8716c67666d897bd3e)
            check_type(argname="argument x", value=x, expected_type=type_hints["x"])
        return typing.cast(builtins.bool, jsii.sinvoke(cls, "isRosElement", [x]))

    @jsii.member(jsii_name="overrideLogicalId")
    def override_logical_id(self, new_logical_id: builtins.str) -> None:
        '''Overrides the auto-generated logical ID with a specific ID.

        :param new_logical_id: The new logical ID to use for this stack element.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__08dd30761a553a2adc5e01c01d68f30e8ddea800911818c648f0a49c635f69fb)
            check_type(argname="argument new_logical_id", value=new_logical_id, expected_type=type_hints["new_logical_id"])
        return typing.cast(None, jsii.invoke(self, "overrideLogicalId", [new_logical_id]))

    @builtins.property
    @jsii.member(jsii_name="creationStack")
    def creation_stack(self) -> typing.List[builtins.str]:
        '''
        :return:

        the stack trace of the point where this Resource was created from, sourced
        from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
        node +internal+ entries filtered.
        '''
        return typing.cast(typing.List[builtins.str], jsii.get(self, "creationStack"))

    @builtins.property
    @jsii.member(jsii_name="logicalId")
    def logical_id(self) -> builtins.str:
        '''The logical ID for this stack element.

        The logical ID of the element
        is calculated from the path of the resource node in the construct tree.

        To override this value, use ``overrideLogicalId(newLogicalId)``.

        :return:

        the logical ID as a stringified token. This value will only get
        resolved during synthesis.
        '''
        return typing.cast(builtins.str, jsii.get(self, "logicalId"))

    @builtins.property
    @jsii.member(jsii_name="stack")
    def stack(self) -> "Stack":
        '''The stack in which this element is defined.

        RosElements must be defined within a stack scope (directly or indirectly).
        '''
        return typing.cast("Stack", jsii.get(self, "stack"))


class _RosElementProxy(RosElement):
    pass

# Adding a "__jsii_proxy_class__(): typing.Type" function to the abstract class
typing.cast(typing.Any, RosElement).__jsii_proxy_class__ = lambda : _RosElementProxy


class RosInfo(
    RosElement,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.RosInfo",
):
    def __init__(
        self,
        scope: Construct,
        id: builtins.str,
        info: typing.Union[builtins.str, typing.Mapping[builtins.str, typing.Any]],
    ) -> None:
        '''Creates properties for this stack.

        :param scope: The parent construct.
        :param id: -
        :param info: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7300de86255b954db919450213cdd6104ff126ec38b173084a8af111ebb6bf42)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument info", value=info, expected_type=type_hints["info"])
        jsii.create(self.__class__, self, [scope, id, info])

    @jsii.python.classproperty
    @jsii.member(jsii_name="description")
    def description(cls) -> builtins.str:  # pyright: ignore [reportGeneralTypeIssues]
        return typing.cast(builtins.str, jsii.sget(cls, "description"))

    @description.setter # type: ignore[no-redef]
    def description(cls, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__8b371b50c0476a22f7da554b0ef5e1b89dc247a8bb992c6f86b2ed7c09e0892e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.sset(cls, "description", value)

    @jsii.python.classproperty
    @jsii.member(jsii_name="formatVersion")
    def format_version(cls) -> builtins.str:  # pyright: ignore [reportGeneralTypeIssues]
        return typing.cast(builtins.str, jsii.sget(cls, "formatVersion"))

    @format_version.setter # type: ignore[no-redef]
    def format_version(cls, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__aa96b151c96eada05a9d3b279fb66e4cb84bb539d53d0fa549a3a8b5409590e9)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.sset(cls, "formatVersion", value)

    @jsii.python.classproperty
    @jsii.member(jsii_name="metadata")
    def metadata(cls) -> builtins.str:  # pyright: ignore [reportGeneralTypeIssues]
        return typing.cast(builtins.str, jsii.sget(cls, "metadata"))

    @metadata.setter # type: ignore[no-redef]
    def metadata(cls, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2e410986d9d6502c50d2359c177f56480efe88b9aaac9a2dc2b6b21f61681483)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.sset(cls, "metadata", value)

    @jsii.python.classproperty
    @jsii.member(jsii_name="v20150901")
    def v20150901(cls) -> builtins.str:  # pyright: ignore [reportGeneralTypeIssues]
        return typing.cast(builtins.str, jsii.sget(cls, "v20150901"))

    @v20150901.setter # type: ignore[no-redef]
    def v20150901(cls, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__94e885e07ee948b0adff014e19a0ee4e877f020a16bf7c546ccca03bdd02e8d0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.sset(cls, "v20150901", value)


class RosOutput(
    RosElement,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.RosOutput",
):
    def __init__(
        self,
        scope: Construct,
        id: builtins.str,
        *,
        value: typing.Any,
        condition: typing.Optional["RosCondition"] = None,
        description: typing.Optional[builtins.str] = None,
        export_name: typing.Optional[builtins.str] = None,
    ) -> None:
        '''Creates an RosOutput value for this stack.

        :param scope: The parent construct.
        :param id: -
        :param value: The value of the property returned by Resource Orchestration Service. The value of an output can include literals, parameter references, pseudo-parameters, a mapping value, or intrinsic functions.
        :param condition: A condition to associate with this output value. If the condition evaluates to ``false``, this output value will not be included in the stack. Default: - No condition is associated with the output.
        :param description: A String type that describes the output value. The description can be a maximum of 4 K in length. Default: - No description.
        :param export_name: The name used to export the value of this output across stacks. To import the value from another stack, use ``Fn.importValue(exportName)``. Default: - the output is not exported
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ddd2ed831ba9eeda3b15433187523442a685f4956efb14117d5dafc98c124d14)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
        props = RosOutputProps(
            value=value,
            condition=condition,
            description=description,
            export_name=export_name,
        )

        jsii.create(self.__class__, self, [scope, id, props])

    @jsii.member(jsii_name="addCondition")
    def add_condition(self, condition: "RosCondition") -> None:
        '''
        :param condition: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b7aaa28eb232cdee9e75f6952c8ab6cf5980c389158bbcfa89b4f4432767c575)
            check_type(argname="argument condition", value=condition, expected_type=type_hints["condition"])
        return typing.cast(None, jsii.invoke(self, "addCondition", [condition]))


class RosParameter(
    RosElement,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.RosParameter",
):
    '''A ROS parameter.

    Parameters enable you to input custom values to your template each time you create or
    update a stack.
    '''

    def __init__(
        self,
        scope: Construct,
        id: builtins.str,
        *,
        allowed_pattern: typing.Optional[builtins.str] = None,
        allowed_values: typing.Optional[typing.Sequence[typing.Any]] = None,
        association_property: typing.Optional[builtins.str] = None,
        association_property_metadata: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        confirm: typing.Optional[builtins.bool] = None,
        constraint_description: typing.Optional[typing.Union[builtins.str, typing.Mapping[builtins.str, builtins.str]]] = None,
        default_value: typing.Any = None,
        description: typing.Optional[typing.Union[builtins.str, typing.Mapping[builtins.str, builtins.str]]] = None,
        label: typing.Optional[builtins.str] = None,
        max_length: typing.Optional[jsii.Number] = None,
        max_value: typing.Optional[jsii.Number] = None,
        min_length: typing.Optional[jsii.Number] = None,
        min_value: typing.Optional[jsii.Number] = None,
        no_echo: typing.Optional[builtins.bool] = None,
        text_area: typing.Optional[builtins.bool] = None,
        type: typing.Optional[RosParameterType] = None,
    ) -> None:
        '''
        :param scope: -
        :param id: -
        :param allowed_pattern: -
        :param allowed_values: -
        :param association_property: -
        :param association_property_metadata: -
        :param confirm: -
        :param constraint_description: -
        :param default_value: -
        :param description: -
        :param label: -
        :param max_length: -
        :param max_value: -
        :param min_length: -
        :param min_value: -
        :param no_echo: -
        :param text_area: -
        :param type: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c1eedc66bdf3ec0f47726c50b7cb3a20ea4c777331c44e83e7720074022f7d61)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
        props = RosParameterProps(
            allowed_pattern=allowed_pattern,
            allowed_values=allowed_values,
            association_property=association_property,
            association_property_metadata=association_property_metadata,
            confirm=confirm,
            constraint_description=constraint_description,
            default_value=default_value,
            description=description,
            label=label,
            max_length=max_length,
            max_value=max_value,
            min_length=min_length,
            min_value=min_value,
            no_echo=no_echo,
            text_area=text_area,
            type=type,
        )

        jsii.create(self.__class__, self, [scope, id, props])

    @jsii.member(jsii_name="resolve")
    def resolve(self, _context: IResolveContext) -> typing.Any:
        '''
        :param _context: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a28eb848a0f55c965d4c5b981426497b24a126948abc9ce0a408838596a87de2)
            check_type(argname="argument _context", value=_context, expected_type=type_hints["_context"])
        return typing.cast(typing.Any, jsii.invoke(self, "resolve", [_context]))

    @jsii.member(jsii_name="validateProperties")
    def validate_properties(
        self,
        *,
        allowed_pattern: typing.Optional[builtins.str] = None,
        allowed_values: typing.Optional[typing.Sequence[typing.Any]] = None,
        association_property: typing.Optional[builtins.str] = None,
        association_property_metadata: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        confirm: typing.Optional[builtins.bool] = None,
        constraint_description: typing.Optional[typing.Union[builtins.str, typing.Mapping[builtins.str, builtins.str]]] = None,
        default_value: typing.Any = None,
        description: typing.Optional[typing.Union[builtins.str, typing.Mapping[builtins.str, builtins.str]]] = None,
        label: typing.Optional[builtins.str] = None,
        max_length: typing.Optional[jsii.Number] = None,
        max_value: typing.Optional[jsii.Number] = None,
        min_length: typing.Optional[jsii.Number] = None,
        min_value: typing.Optional[jsii.Number] = None,
        no_echo: typing.Optional[builtins.bool] = None,
        text_area: typing.Optional[builtins.bool] = None,
        type: typing.Optional[RosParameterType] = None,
    ) -> None:
        '''
        :param allowed_pattern: -
        :param allowed_values: -
        :param association_property: -
        :param association_property_metadata: -
        :param confirm: -
        :param constraint_description: -
        :param default_value: -
        :param description: -
        :param label: -
        :param max_length: -
        :param max_value: -
        :param min_length: -
        :param min_value: -
        :param no_echo: -
        :param text_area: -
        :param type: -
        '''
        props = RosParameterProps(
            allowed_pattern=allowed_pattern,
            allowed_values=allowed_values,
            association_property=association_property,
            association_property_metadata=association_property_metadata,
            confirm=confirm,
            constraint_description=constraint_description,
            default_value=default_value,
            description=description,
            label=label,
            max_length=max_length,
            max_value=max_value,
            min_length=min_length,
            min_value=min_value,
            no_echo=no_echo,
            text_area=text_area,
            type=type,
        )

        return typing.cast(None, jsii.invoke(self, "validateProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ASSOCIATION_PROPERTY_ALLOWED_VALUES")
    def ASSOCIATION_PROPERTY_ALLOWED_VALUES(cls) -> typing.List[builtins.str]:
        return typing.cast(typing.List[builtins.str], jsii.sget(cls, "ASSOCIATION_PROPERTY_ALLOWED_VALUES"))

    @jsii.python.classproperty
    @jsii.member(jsii_name="TYPE_ALLOWED_VALUES")
    def TYPE_ALLOWED_VALUES(cls) -> typing.List[builtins.str]:
        return typing.cast(typing.List[builtins.str], jsii.sget(cls, "TYPE_ALLOWED_VALUES"))

    @builtins.property
    @jsii.member(jsii_name="noEcho")
    def no_echo(self) -> builtins.bool:
        '''Indicates if this parameter is configured with "NoEcho" enabled.'''
        return typing.cast(builtins.bool, jsii.get(self, "noEcho"))

    @builtins.property
    @jsii.member(jsii_name="value")
    def value(self) -> IResolvable:
        '''The parameter value as a Token.'''
        return typing.cast(IResolvable, jsii.get(self, "value"))

    @builtins.property
    @jsii.member(jsii_name="valueAsAny")
    def value_as_any(self) -> typing.Any:
        '''The parameter value, if it represents a string.'''
        return typing.cast(typing.Any, jsii.get(self, "valueAsAny"))

    @builtins.property
    @jsii.member(jsii_name="valueAsBoolean")
    def value_as_boolean(self) -> typing.Any:
        '''The parameter value, if it represents a string.'''
        return typing.cast(typing.Any, jsii.get(self, "valueAsBoolean"))

    @builtins.property
    @jsii.member(jsii_name="valueAsList")
    def value_as_list(self) -> typing.List[builtins.str]:
        '''The parameter value, if it represents a string list.'''
        return typing.cast(typing.List[builtins.str], jsii.get(self, "valueAsList"))

    @builtins.property
    @jsii.member(jsii_name="valueAsNumber")
    def value_as_number(self) -> jsii.Number:
        '''The parameter value, if it represents a number.'''
        return typing.cast(jsii.Number, jsii.get(self, "valueAsNumber"))

    @builtins.property
    @jsii.member(jsii_name="valueAsString")
    def value_as_string(self) -> builtins.str:
        '''The parameter value, if it represents a string.'''
        return typing.cast(builtins.str, jsii.get(self, "valueAsString"))

    class AssociationProperty(
        metaclass=jsii.JSIIMeta,
        jsii_type="@alicloud/ros-cdk-core.RosParameter.AssociationProperty",
    ):
        def __init__(self) -> None:
            jsii.create(self.__class__, self, [])

        @jsii.python.classproperty
        @jsii.member(jsii_name="ECS_INSTANCE_TYPE")
        def ECS_INSTANCE_TYPE(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ECS_INSTANCE_TYPE"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ECS_KEY_PAIR_NAME")
        def ECS_KEY_PAIR_NAME(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ECS_KEY_PAIR_NAME"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="IMAGE_ID")
        def IMAGE_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "IMAGE_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="RAM_ROLE")
        def RAM_ROLE(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "RAM_ROLE"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="RAM_USER")
        def RAM_USER(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "RAM_USER"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="SECURITY_GROUP_ID")
        def SECURITY_GROUP_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "SECURITY_GROUP_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="VPC_ID")
        def VPC_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "VPC_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="VSWITCH_ID")
        def VSWITCH_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "VSWITCH_ID"))

        @jsii.python.classproperty
        @jsii.member(jsii_name="ZONE_ID")
        def ZONE_ID(cls) -> builtins.str:
            return typing.cast(builtins.str, jsii.sget(cls, "ZONE_ID"))


class RosRefElement(
    RosElement,
    metaclass=jsii.JSIIAbstractClass,
    jsii_type="@alicloud/ros-cdk-core.RosRefElement",
):
    '''Base class for referenceable template constructs which are not Resources.

    These constructs are things like Conditions and Parameters, can be
    referenced by taking the ``.ref`` attribute.

    Resource constructs do not inherit from RosRefElement because they have their
    own, more specific types returned from the .ref attribute. Also, some
    resources aren't referenceable at all (such as BucketPolicies or GatewayAttachments).
    '''

    def __init__(self, scope: Construct, id: builtins.str) -> None:
        '''Creates an entity and binds it to a tree.

        Note that the root of the tree must be a Stack object (not just any Root).

        :param scope: The parent construct.
        :param id: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bc68be0ccd998c03d226dee9f58b58db58d51777d1dcb148ca8580210f62d8da)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
        jsii.create(self.__class__, self, [scope, id])

    @builtins.property
    @jsii.member(jsii_name="ref")
    def ref(self) -> builtins.str:
        '''Return a string that will be resolved to a RosTemplate ``{ Ref }`` for this element.

        If, by any chance, the intrinsic reference of a resource is not a string, you could
        coerce it to an IResolvable through ``Lazy.any({ produce: resource.ref })``.
        '''
        return typing.cast(builtins.str, jsii.get(self, "ref"))


class _RosRefElementProxy(
    RosRefElement,
    jsii.proxy_for(RosElement), # type: ignore[misc]
):
    pass

# Adding a "__jsii_proxy_class__(): typing.Type" function to the abstract class
typing.cast(typing.Any, RosRefElement).__jsii_proxy_class__ = lambda : _RosRefElementProxy


class RosResource(
    RosRefElement,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.RosResource",
):
    '''Represents a ROS resource.'''

    def __init__(
        self,
        scope: Construct,
        id: builtins.str,
        *,
        type: builtins.str,
        properties: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
    ) -> None:
        '''Creates a resource construct.

        :param scope: -
        :param id: -
        :param type: ROS template resource type (e.g. ``ALIYUN::ECS::Instance``).
        :param properties: Resource properties. Default: - No resource properties.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__941346c4ba544e38c6d484ee04db6f28c2e03e3998827ec04c07caeb8e3513b9)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
        props = RosResourceProps(type=type, properties=properties)

        jsii.create(self.__class__, self, [scope, id, props])

    @jsii.member(jsii_name="isRosResource")
    @builtins.classmethod
    def is_ros_resource(cls, construct: IConstruct) -> builtins.bool:
        '''Check whether the given construct is a RosResource.

        :param construct: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__26a7a5bd0c2c812f4b7c3483c22ba2665d748cd34851f26f18d362f3b7641568)
            check_type(argname="argument construct", value=construct, expected_type=type_hints["construct"])
        return typing.cast(builtins.bool, jsii.sinvoke(cls, "isRosResource", [construct]))

    @jsii.member(jsii_name="addCondition")
    def add_condition(self, con: "RosCondition") -> None:
        '''
        :param con: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3bab3990b90c81f3ea564fe13bb7a16fd3f3b943f93b68220c584761a015331f)
            check_type(argname="argument con", value=con, expected_type=type_hints["con"])
        return typing.cast(None, jsii.invoke(self, "addCondition", [con]))

    @jsii.member(jsii_name="addCount")
    def add_count(self, count: typing.Union[jsii.Number, IResolvable]) -> None:
        '''
        :param count: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6dcfa9031021a07adecdb44494c0f0c80c2d66bd014996148e6443d50d8f4755)
            check_type(argname="argument count", value=count, expected_type=type_hints["count"])
        return typing.cast(None, jsii.invoke(self, "addCount", [count]))

    @jsii.member(jsii_name="addDeletionOverride")
    def add_deletion_override(self, path: builtins.str) -> None:
        '''Syntactic sugar for ``addOverride(path, undefined)``.

        :param path: The path of the value to delete.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5dc20ad26961aac937f4a09fe1babbdd7982bf6c0e340f79c2662c20030cd319)
            check_type(argname="argument path", value=path, expected_type=type_hints["path"])
        return typing.cast(None, jsii.invoke(self, "addDeletionOverride", [path]))

    @jsii.member(jsii_name="addDependsOn")
    def add_depends_on(self, target: "RosResource") -> None:
        '''Indicates that this resource depends on another resource and cannot be provisioned unless the other resource has been successfully provisioned.

        This can be used for resources across stacks (or nested stack) boundaries
        and the dependency will automatically be transferred to the relevant scope.

        :param target: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4fcdc2057253d1e8056633ce513f71b142942e1b4c71bbd14bffbb951ce349db)
            check_type(argname="argument target", value=target, expected_type=type_hints["target"])
        return typing.cast(None, jsii.invoke(self, "addDependsOn", [target]))

    @jsii.member(jsii_name="addDesc")
    def add_desc(self, desc: builtins.str) -> None:
        '''
        :param desc: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5603f5e790e6800ca247898c0a76a748b08bdccea54b2f8d8ef44dcd446d54b3)
            check_type(argname="argument desc", value=desc, expected_type=type_hints["desc"])
        return typing.cast(None, jsii.invoke(self, "addDesc", [desc]))

    @jsii.member(jsii_name="addMetaData")
    def add_meta_data(self, key: builtins.str, value: typing.Any) -> None:
        '''
        :param key: -
        :param value: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e8d8fdbfca26a1b9c08967852905c7f2c18defd647238b134e1b34d1f98622c7)
            check_type(argname="argument key", value=key, expected_type=type_hints["key"])
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        return typing.cast(None, jsii.invoke(self, "addMetaData", [key, value]))

    @jsii.member(jsii_name="addOverride")
    def add_override(self, path: builtins.str, value: typing.Any) -> None:
        '''Adds an override to the synthesized ROS resource.

        To add a
        property override, either use ``addPropertyOverride`` or prefix ``path`` with
        "Properties." (i.e. ``Properties.TopicName``).

        If the override is nested, separate each nested level using a dot (.) in the path parameter.
        If there is an array as part of the nesting, specify the index in the path.

        For example::

           addOverride('Properties.GlobalSecondaryIndexes.0.Projection.NonKeyAttributes', ['myattribute'])
           addOverride('Properties.GlobalSecondaryIndexes.1.ProjectionType', 'INCLUDE')

        would add the overrides Example::

           "Properties": {
              "GlobalSecondaryIndexes": [
                {
                  "Projection": {
                    "NonKeyAttributes": [ "myattribute" ]
                    ...
                  }
                  ...
                },
                {
                  "ProjectionType": "INCLUDE"
                  ...
                },
              ]
              ...
           }

        :param path: - The path of the property, you can use dot notation to override values in complex types. Any intermdediate keys will be created as needed.
        :param value: - The value. Could be primitive or complex.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__de4d904e391329b12281f41d993ef7bec66f72067ac6df107010c7da6ad60fc6)
            check_type(argname="argument path", value=path, expected_type=type_hints["path"])
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        return typing.cast(None, jsii.invoke(self, "addOverride", [path, value]))

    @jsii.member(jsii_name="addPropertyDeletionOverride")
    def add_property_deletion_override(self, property_path: builtins.str) -> None:
        '''Adds an override that deletes the value of a property from the resource definition.

        :param property_path: The path to the property.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e73a34b5fd578a1a0e6d239f8de7f429c7c7cb23dd01e234b26d2537a37db7e1)
            check_type(argname="argument property_path", value=property_path, expected_type=type_hints["property_path"])
        return typing.cast(None, jsii.invoke(self, "addPropertyDeletionOverride", [property_path]))

    @jsii.member(jsii_name="addPropertyOverride")
    def add_property_override(
        self,
        property_path: builtins.str,
        value: typing.Any,
    ) -> None:
        '''Adds an override to a resource property.

        Syntactic sugar for ``addOverride("Properties.<...>", value)``.

        :param property_path: The path of the property.
        :param value: The value.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3d3152a58d03df66e61a691c9a3e2407cd03751db0aa384483e63e6239031b34)
            check_type(argname="argument property_path", value=property_path, expected_type=type_hints["property_path"])
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        return typing.cast(None, jsii.invoke(self, "addPropertyOverride", [property_path, value]))

    @jsii.member(jsii_name="addRosDependency")
    def add_ros_dependency(self, target: builtins.str) -> None:
        '''
        :param target: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__571aed41b9b5890cca2490033e2ffea5957ed69b0a36cc932074ac2aff4688ec)
            check_type(argname="argument target", value=target, expected_type=type_hints["target"])
        return typing.cast(None, jsii.invoke(self, "addRosDependency", [target]))

    @jsii.member(jsii_name="applyRemovalPolicy")
    def apply_removal_policy(
        self,
        policy: typing.Optional[RemovalPolicy] = None,
        *,
        apply_to_update_replace_policy: typing.Optional[builtins.bool] = None,
        default_policy: typing.Optional[RemovalPolicy] = None,
    ) -> None:
        '''Sets the deletion policy of the resource based on the removal policy specified.

        :param policy: -
        :param apply_to_update_replace_policy: -
        :param default_policy: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f11f6c0e586fc49c3773a537af49ac2e497dcc49ecdecb8c4d92702a8e66a7e4)
            check_type(argname="argument policy", value=policy, expected_type=type_hints["policy"])
        options = RemovalPolicyOptions(
            apply_to_update_replace_policy=apply_to_update_replace_policy,
            default_policy=default_policy,
        )

        return typing.cast(None, jsii.invoke(self, "applyRemovalPolicy", [policy, options]))

    @jsii.member(jsii_name="getAtt")
    def get_att(self, attribute_name: builtins.str) -> Reference:
        '''Returns a token for an runtime attribute of this resource.

        Ideally, use generated attribute accessors (e.g. ``resource.arn``), but this can be used for future compatibility
        in case there is no generated attribute.

        :param attribute_name: The name of the attribute.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__01a8a56058b17a312f5ffb8ca87bdfeb2749ff430a4213b4a7dda2c476ab0ef4)
            check_type(argname="argument attribute_name", value=attribute_name, expected_type=type_hints["attribute_name"])
        return typing.cast(Reference, jsii.invoke(self, "getAtt", [attribute_name]))

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__980668d774fee5ae667c0a3cf02ce68aedfdf3b8f92d10348ec1a94883c0c78b)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.member(jsii_name="toString")
    def to_string(self) -> builtins.str:
        '''Returns a string representation of this construct.

        :return: a string representation of this resource
        '''
        return typing.cast(builtins.str, jsii.invoke(self, "toString", []))

    @jsii.member(jsii_name="validateProperties")
    def _validate_properties(self, _properties: typing.Any) -> None:
        '''
        :param _properties: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__6e75c1ebcfe210720730289132506828c5a1e5c261f68ef912e260fdd4f28fd4)
            check_type(argname="argument _properties", value=_properties, expected_type=type_hints["_properties"])
        return typing.cast(None, jsii.invoke(self, "validateProperties", [_properties]))

    @builtins.property
    @jsii.member(jsii_name="rosOptions")
    def ros_options(self) -> IRosResourceOptions:
        '''Options for this resource, such as condition, update policy etc.'''
        return typing.cast(IRosResourceOptions, jsii.get(self, "rosOptions"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="rosResourceType")
    def ros_resource_type(self) -> builtins.str:
        '''ROS resource type.'''
        return typing.cast(builtins.str, jsii.get(self, "rosResourceType"))

    @builtins.property
    @jsii.member(jsii_name="updatedProperites")
    def _updated_properites(self) -> typing.Mapping[builtins.str, typing.Any]:
        '''Return properties modified after initiation.

        Resources that expose mutable properties should override this function to
        collect and return the properties object for this resource.
        '''
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "updatedProperites"))


@jsii.implements(ITaggable)
class Stack(
    Construct,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.Stack",
):
    '''A root construct which represents a single ROS stack.'''

    def __init__(
        self,
        scope: typing.Optional[Construct] = None,
        id: typing.Optional[builtins.str] = None,
        *,
        description: typing.Optional[builtins.str] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
        metadata: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        stack_name: typing.Optional[builtins.str] = None,
        synthesizer: typing.Optional[IStackSynthesizer] = None,
        tags: typing.Optional[typing.Mapping[builtins.str, builtins.str]] = None,
        version: typing.Optional[builtins.str] = None,
    ) -> None:
        '''Creates a new stack.

        :param scope: Parent of this stack, usually a Program instance.
        :param id: The construct ID of this stack. If ``stackName`` is not explicitly defined, this id (and any parent IDs) will be used to determine the physical ID of the stack.
        :param description: A description of the stack. Default: - No description.
        :param enable_resource_property_constraint: -
        :param metadata: -
        :param stack_name: Name to deploy the stack with. Default: - Derived from construct path.
        :param synthesizer: Synthesis method to use while deploying this stack. Default: - ``DefaultStackSynthesizer``
        :param tags: Stack tags that will be applied to all the taggable resources and the stack itself. Default: {}
        :param version: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__1dc168842bc69954d0e07ab74e7ad20f5227249df44949f4a202402c806ebe86)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
        props = StackProps(
            description=description,
            enable_resource_property_constraint=enable_resource_property_constraint,
            metadata=metadata,
            stack_name=stack_name,
            synthesizer=synthesizer,
            tags=tags,
            version=version,
        )

        jsii.create(self.__class__, self, [scope, id, props])

    @jsii.member(jsii_name="isStack")
    @builtins.classmethod
    def is_stack(cls, x: typing.Any) -> builtins.bool:
        '''Return whether the given object is a Stack.

        We do attribute detection since we can't reliably use 'instanceof'.

        :param x: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0bc7e129e09b4feddab62e4966768ba39cbaed884489a9137f10d40ac2bf7db0)
            check_type(argname="argument x", value=x, expected_type=type_hints["x"])
        return typing.cast(builtins.bool, jsii.sinvoke(cls, "isStack", [x]))

    @jsii.member(jsii_name="of")
    @builtins.classmethod
    def of(cls, construct: IConstruct) -> "Stack":
        '''Looks up the first stack scope in which ``construct`` is defined.

        Fails if there is no stack up the tree.

        :param construct: The construct to start the search from.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b94641c207370c83802c8c71ec1c1b6f5bfe8e7d3d68b538d8e81241a823e1e6)
            check_type(argname="argument construct", value=construct, expected_type=type_hints["construct"])
        return typing.cast("Stack", jsii.sinvoke(cls, "of", [construct]))

    @jsii.member(jsii_name="addDependency")
    def add_dependency(
        self,
        target: "Stack",
        reason: typing.Optional[builtins.str] = None,
    ) -> None:
        '''Add a dependency between this stack and another stack.

        This can be used to define dependencies between any two stacks within an
        app, and also supports nested stacks.

        :param target: -
        :param reason: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b4506fefa5dd69433347eb17079b665a7e5aeed444aaa064f41f02e964b224b2)
            check_type(argname="argument target", value=target, expected_type=type_hints["target"])
            check_type(argname="argument reason", value=reason, expected_type=type_hints["reason"])
        return typing.cast(None, jsii.invoke(self, "addDependency", [target, reason]))

    @jsii.member(jsii_name="allocateLogicalId")
    def _allocate_logical_id(self, ros_element: RosElement) -> builtins.str:
        '''Returns the naming scheme used to allocate logical IDs.

        By default, uses
        the ``HashedAddressingScheme`` but this method can be overridden to customize
        this behavior.

        In order to make sure logical IDs are unique and stable, we hash the resource
        construct tree path (i.e. toplevel/secondlevel/.../myresource) and add it as
        a suffix to the path components joined without a separator (ROS
        IDs only allow alphanumeric characters).

        The result will be:

        <path.join('')><md5(path.join('/')>
        "human"      "hash"

        If the "human" part of the ID exceeds 240 characters, we simply trim it so
        the total ID doesn't exceed 255 character limit.

        We only take 8 characters from the md5 hash (0.000005 chance of collision).

        Special cases:

        - If the path only contains a single component (i.e. it's a top-level
          resource), we won't add the hash to it. The hash is not needed for
          disamiguation and also, it allows for a more straightforward migration an
          existing ROS template to a CDK stack without logical ID changes
          (or renames).
        - For aesthetic reasons, if the last components of the path are the same
          (i.e. ``L1/L2/Pipeline/Pipeline``), they will be de-duplicated to make the
          resulting human portion of the ID more pleasing: ``L1L2Pipeline<HASH>``
          instead of ``L1L2PipelinePipeline<HASH>``
        - If a component is named "Default" it will be omitted from the path. This
          allows refactoring higher level abstractions around constructs without affecting
          the IDs of already deployed resources.
        - If a component is named "Resource" it will be omitted from the user-visible
          path, but included in the hash. This reduces visual noise in the human readable
          part of the identifier.

        :param ros_element: The element for which the logical ID is allocated.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__0af605d4b0354a6812eb679f03dc7800afa36dba79ee386d95519a3db2ca6977)
            check_type(argname="argument ros_element", value=ros_element, expected_type=type_hints["ros_element"])
        return typing.cast(builtins.str, jsii.invoke(self, "allocateLogicalId", [ros_element]))

    @jsii.member(jsii_name="getLogicalId")
    def get_logical_id(self, element: RosElement) -> builtins.str:
        '''Allocates a stack-unique logical identity for a specific resource.

        This method is called when a ``RosElement`` is created and used to render the
        initial logical identity of resources. Logical ID renames are applied at
        this stage.

        This method uses the protected method ``allocateLogicalId`` to render the
        logical ID for an element. To modify the naming scheme, extend the ``Stack``
        class and override this method.

        :param element: The ROS element for which a logical identity is needed.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7bfdee0d9f37059144839af82465d446909bf1e3490f99384d011f1a8324a431)
            check_type(argname="argument element", value=element, expected_type=type_hints["element"])
        return typing.cast(builtins.str, jsii.invoke(self, "getLogicalId", [element]))

    @jsii.member(jsii_name="prepareCrossReference")
    def _prepare_cross_reference(
        self,
        _source_stack: "Stack",
        reference: Reference,
    ) -> IResolvable:
        '''(deprecated) Deprecated.

        :param _source_stack: -
        :param reference: -

        :return: reference itself without any change

        :deprecated: cross reference handling has been moved to ``App.prepare()``.

        :stability: deprecated
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__af7bd001d5b018cf8e304d958695046f54f29932881a260dc73b7e680abb1f87)
            check_type(argname="argument _source_stack", value=_source_stack, expected_type=type_hints["_source_stack"])
            check_type(argname="argument reference", value=reference, expected_type=type_hints["reference"])
        return typing.cast(IResolvable, jsii.invoke(self, "prepareCrossReference", [_source_stack, reference]))

    @jsii.member(jsii_name="renameLogicalId")
    def rename_logical_id(self, old_id: builtins.str, new_id: builtins.str) -> None:
        '''Rename a generated logical identities.

        To modify the naming scheme strategy, extend the ``Stack`` class and
        override the ``allocateLogicalId`` method.

        :param old_id: -
        :param new_id: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bbf09e8a560a6d2a51b85d6d34d59468e862c5d2438cfb9d51a67d4e52fc7683)
            check_type(argname="argument old_id", value=old_id, expected_type=type_hints["old_id"])
            check_type(argname="argument new_id", value=new_id, expected_type=type_hints["new_id"])
        return typing.cast(None, jsii.invoke(self, "renameLogicalId", [old_id, new_id]))

    @jsii.member(jsii_name="resolve")
    def resolve(self, obj: typing.Any) -> typing.Any:
        '''Resolve a tokenized value in the context of the current stack.

        :param obj: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2df79660b12efbfa718154119699655340f2e0f1473b164ba21d864a85e698e4)
            check_type(argname="argument obj", value=obj, expected_type=type_hints["obj"])
        return typing.cast(typing.Any, jsii.invoke(self, "resolve", [obj]))

    @jsii.member(jsii_name="synthesize")
    def _synthesize(self, session: ISynthesisSession) -> None:
        '''Allows this construct to emit artifacts into the cloud assembly during synthesis.

        This method is usually implemented by framework-level constructs such as ``Stack`` and ``Asset``
        as they participate in synthesizing the cloud assembly.

        :param session: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__af0331c6d2a7f5ce9ffb0945062b3bd65a450e61fb33a74d8d8893038819f96e)
            check_type(argname="argument session", value=session, expected_type=type_hints["session"])
        return typing.cast(None, jsii.invoke(self, "synthesize", [session]))

    @jsii.member(jsii_name="toJsonString")
    def to_json_string(
        self,
        obj: typing.Any,
        space: typing.Optional[jsii.Number] = None,
    ) -> builtins.str:
        '''Convert an object, potentially containing tokens, to a JSON string.

        :param obj: -
        :param space: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__076a3f3e8ef5caf16f7c89a9161d7d167666b81169349270d1676da89018fb23)
            check_type(argname="argument obj", value=obj, expected_type=type_hints["obj"])
            check_type(argname="argument space", value=space, expected_type=type_hints["space"])
        return typing.cast(builtins.str, jsii.invoke(self, "toJsonString", [obj, space]))

    @builtins.property
    @jsii.member(jsii_name="artifactId")
    def artifact_id(self) -> builtins.str:
        '''The ID of the cloud assembly artifact for this stack.'''
        return typing.cast(builtins.str, jsii.get(self, "artifactId"))

    @builtins.property
    @jsii.member(jsii_name="dependencies")
    def dependencies(self) -> typing.List["Stack"]:
        '''Return the stacks this stack depends on.'''
        return typing.cast(typing.List["Stack"], jsii.get(self, "dependencies"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @builtins.property
    @jsii.member(jsii_name="nested")
    def nested(self) -> builtins.bool:
        '''Indicates if this is a nested stack, in which case ``parentStack`` will include a reference to it's parent.'''
        return typing.cast(builtins.bool, jsii.get(self, "nested"))

    @builtins.property
    @jsii.member(jsii_name="stackId")
    def stack_id(self) -> builtins.str:
        '''The ID of the stack.'''
        return typing.cast(builtins.str, jsii.get(self, "stackId"))

    @builtins.property
    @jsii.member(jsii_name="stackName")
    def stack_name(self) -> builtins.str:
        '''The concrete ROS physical stack name.

        This is either the name defined explicitly in the ``stackName`` prop or
        allocated based on the stack's location in the construct tree. Stacks that
        are directly defined under the app use their construct ``id`` as their stack
        name. Stacks that are defined deeper within the tree will use a hashed naming
        scheme based on the construct path to ensure uniqueness.
        '''
        return typing.cast(builtins.str, jsii.get(self, "stackName"))

    @builtins.property
    @jsii.member(jsii_name="synthesizer")
    def synthesizer(self) -> IStackSynthesizer:
        '''(experimental) Synthesis method for this stack.

        :stability: experimental
        '''
        return typing.cast(IStackSynthesizer, jsii.get(self, "synthesizer"))

    @builtins.property
    @jsii.member(jsii_name="tags")
    def tags(self) -> TagManager:
        '''Tags to be applied to the stack.'''
        return typing.cast(TagManager, jsii.get(self, "tags"))

    @builtins.property
    @jsii.member(jsii_name="templateFile")
    def template_file(self) -> builtins.str:
        '''The name of the ROS template file emitted to the output directory during synthesis.

        Example::

            MyStack.template.json
        '''
        return typing.cast(builtins.str, jsii.get(self, "templateFile"))

    @builtins.property
    @jsii.member(jsii_name="templateOptions")
    def template_options(self) -> ITemplateOptions:
        '''Options for ROS template (like version, description).'''
        return typing.cast(ITemplateOptions, jsii.get(self, "templateOptions"))

    @builtins.property
    @jsii.member(jsii_name="nestedStackParent")
    def nested_stack_parent(self) -> typing.Optional["Stack"]:
        '''If this is a nested stack, returns it's parent stack.'''
        return typing.cast(typing.Optional["Stack"], jsii.get(self, "nestedStackParent"))

    @builtins.property
    @jsii.member(jsii_name="nestedStackResource")
    def nested_stack_resource(self) -> typing.Optional[RosResource]:
        '''(experimental) If this is a nested stack, this represents its ``ALIYUN::ROS::Stack`` resource.

        ``undefined`` for top-level (non-nested) stacks.

        :stability: experimental
        '''
        return typing.cast(typing.Optional[RosResource], jsii.get(self, "nestedStackResource"))

    @builtins.property
    @jsii.member(jsii_name="parentStack")
    def parent_stack(self) -> typing.Optional["Stack"]:
        '''(deprecated) Returns the parent of a nested stack.

        :deprecated: use ``nestedStackParent``

        :stability: deprecated
        '''
        return typing.cast(typing.Optional["Stack"], jsii.get(self, "parentStack"))


class Stage(
    Construct,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.Stage",
):
    '''An abstract application modeling unit consisting of Stacks that should be deployed together.

    Derive a subclass of 'Stage' and use it to model a single instance of your
    application.

    You can then instantiate your subclass multiple times to model multiple
    copies of your application which should be be deployed to different
    environments.
    '''

    def __init__(
        self,
        scope: Construct,
        id: builtins.str,
        *,
        outdir: typing.Optional[builtins.str] = None,
    ) -> None:
        '''
        :param scope: -
        :param id: -
        :param outdir: The output directory into which to emit synthesized artifacts. Can only be specified if this stage is the root stage the app. If this is specified and this stage is nested within another stage, an error will be thrown. Default - for nested stages, outdir will be determined as a relative directory to the outdir of the app. For apps, if outdir is not specified, a temporary directory will be created.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__9d3cc5431aa000ead0553b38893e095b0fff1ca6e8cfac885d80486e937a4dbb)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
        props = StageProps(outdir=outdir)

        jsii.create(self.__class__, self, [scope, id, props])

    @jsii.member(jsii_name="isStage")
    @builtins.classmethod
    def is_stage(cls, x: typing.Any) -> builtins.bool:
        '''(experimental) Test whether the given construct is a stage.

        :param x: -

        :stability: experimental
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__57cc149bf33dfb1dd59aecbfb358c0d1cccf4e870c0cbf33c3e18336b7e6de8f)
            check_type(argname="argument x", value=x, expected_type=type_hints["x"])
        return typing.cast(builtins.bool, jsii.sinvoke(cls, "isStage", [x]))

    @jsii.member(jsii_name="of")
    @builtins.classmethod
    def of(cls, construct: IConstruct) -> typing.Optional["Stage"]:
        '''(experimental) Return the stage this construct is contained with, if available.

        If called
        on a nested stage, returns its parent.

        :param construct: -

        :stability: experimental
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__be7e7d60a27fba054f5fa1e6d28e319ee2e67b01f4cedf5452c2627e2aa17bc8)
            check_type(argname="argument construct", value=construct, expected_type=type_hints["construct"])
        return typing.cast(typing.Optional["Stage"], jsii.sinvoke(cls, "of", [construct]))

    @jsii.member(jsii_name="synth")
    def synth(
        self,
        *,
        skip_validation: typing.Optional[builtins.bool] = None,
    ) -> _ros_cdk_cxapi_45dace6b.CloudAssembly:
        '''Synthesize this stage into a cloud assembly.

        Once an assembly has been synthesized, it cannot be modified. Subsequent
        calls will return the same assembly.

        :param skip_validation: Should we skip construct validation. Default: - false
        '''
        options = StageSynthesisOptions(skip_validation=skip_validation)

        return typing.cast(_ros_cdk_cxapi_45dace6b.CloudAssembly, jsii.invoke(self, "synth", [options]))

    @builtins.property
    @jsii.member(jsii_name="artifactId")
    def artifact_id(self) -> builtins.str:
        '''(experimental) Artifact ID of the assembly if it is a nested stage. The root stage app will return an empty string.

        Derived from the construct path.

        :stability: experimental
        '''
        return typing.cast(builtins.str, jsii.get(self, "artifactId"))

    @builtins.property
    @jsii.member(jsii_name="stageName")
    def stage_name(self) -> builtins.str:
        '''(experimental) The name of the stage.

        Based on names of the parent stages separated by
        hypens.

        :stability: experimental
        '''
        return typing.cast(builtins.str, jsii.get(self, "stageName"))

    @builtins.property
    @jsii.member(jsii_name="parentStage")
    def parent_stage(self) -> typing.Optional["Stage"]:
        '''(experimental) The parent stage or 'undefined' if this is the app.

        -

        :stability: experimental
        '''
        return typing.cast(typing.Optional["Stage"], jsii.get(self, "parentStage"))


class App(Stage, metaclass=jsii.JSIIMeta, jsii_type="@alicloud/ros-cdk-core.App"):
    '''A construct which represents an entire CDK app. This construct is normally the root of the construct tree.

    You would normally define an 'App' instance in your program's entrypoint,
    then define constructs where the app is used as the parent scope.

    After all the child constructs are defined within the app, you should call
    'app.synth()' which will emit a "ros template" from this app into the
    directory specified by 'outdir'.
    '''

    def __init__(
        self,
        *,
        auto_synth: typing.Optional[builtins.bool] = None,
        context: typing.Optional[typing.Mapping[builtins.str, builtins.str]] = None,
        outdir: typing.Optional[builtins.str] = None,
        runtime_info: typing.Optional[builtins.bool] = None,
        stack_traces: typing.Optional[builtins.bool] = None,
        tree_metadata: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Initializes a CDK application.

        :param auto_synth: Automatically call 'synth()' before the program exits. If you set this, you don't have to call 'synth()' explicitly. Note that this feature is only available for certain programming languages, and calling 'synth()' is still recommended. Default true if running via CDK CLI ('CDK_OUTDIR' is set), 'false' otherwise
        :param context: Additional context values for the application. Context set by the CLI or the 'context' key in 'cdk.json' has precedence. Context can be read from any construct using 'node.getContext(key)'. Default: - no additional context
        :param outdir: The output directory into which to emit synthesized artifacts. Default - If this value is *not* set, considers the environment variable 'CDK_OUTDIR'. If 'CDK_OUTDIR' is not defined, uses a temp directory.
        :param runtime_info: Include runtime versioning information. Default: true runtime info is included unless related comtext is set.
        :param stack_traces: Include construct creation stack trace. Default: true stack traces are included unless related context is set.
        :param tree_metadata: Include construct tree metadata as part of the Cloud Assembly. Default: true
        '''
        props = AppProps(
            auto_synth=auto_synth,
            context=context,
            outdir=outdir,
            runtime_info=runtime_info,
            stack_traces=stack_traces,
            tree_metadata=tree_metadata,
        )

        jsii.create(self.__class__, self, [props])

    @jsii.member(jsii_name="isApp")
    @builtins.classmethod
    def is_app(cls, obj: typing.Any) -> builtins.bool:
        '''Checks if an object is an instance of the 'App' class.

        Returns 'true' if 'obj' is an 'App'.
        Param obj The object to evaluate

        :param obj: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__74d0fa652e39f975ef68ff4093ff1dfd8c4919e78344e1e557ea1960f095bcd0)
            check_type(argname="argument obj", value=obj, expected_type=type_hints["obj"])
        return typing.cast(builtins.bool, jsii.sinvoke(cls, "isApp", [obj]))


class NestedStack(
    Stack,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.NestedStack",
):
    def __init__(
        self,
        scope: Construct,
        id: builtins.str,
        *,
        parameters: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
        template_body: typing.Optional[builtins.str] = None,
        template_url: typing.Optional[builtins.str] = None,
        timeout: typing.Optional[jsii.Number] = None,
    ) -> None:
        '''
        :param scope: -
        :param id: -
        :param parameters: -
        :param template_body: -
        :param template_url: -
        :param timeout: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2e646842a4e32a91459603425998d3a13b4b135ea05d39360f3d382a3486dc84)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
        props = NestedStackProps(
            parameters=parameters,
            template_body=template_body,
            template_url=template_url,
            timeout=timeout,
        )

        jsii.create(self.__class__, self, [scope, id, props])

    @jsii.member(jsii_name="isNestedStack")
    @builtins.classmethod
    def is_nested_stack(cls, x: typing.Any) -> builtins.bool:
        '''
        :param x: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__25b017370399ffba3a033fae3ebc112f4fdd2e6f79c636d64384b8f4a381bb0d)
            check_type(argname="argument x", value=x, expected_type=type_hints["x"])
        return typing.cast(builtins.bool, jsii.sinvoke(cls, "isNestedStack", [x]))

    @jsii.member(jsii_name="getAtt")
    def get_att(self, attribute_name: builtins.str) -> builtins.str:
        '''
        :param attribute_name: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__447d9f5b6c2854b6d918d5ae1853ac034d78e15222dae3f55f6c81b4e9386c88)
            check_type(argname="argument attribute_name", value=attribute_name, expected_type=type_hints["attribute_name"])
        return typing.cast(builtins.str, jsii.invoke(self, "getAtt", [attribute_name]))

    @jsii.member(jsii_name="setParameter")
    def set_parameter(self, name: builtins.str, value: typing.Any) -> None:
        '''
        :param name: -
        :param value: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e8acfe38a22d7972aef78bf4967459c27003e8a578a5baffcc308affdbc9c9bc)
            check_type(argname="argument name", value=name, expected_type=type_hints["name"])
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        return typing.cast(None, jsii.invoke(self, "setParameter", [name, value]))

    @builtins.property
    @jsii.member(jsii_name="stackId")
    def stack_id(self) -> builtins.str:
        '''The ID of the stack.'''
        return typing.cast(builtins.str, jsii.get(self, "stackId"))

    @builtins.property
    @jsii.member(jsii_name="stackName")
    def stack_name(self) -> builtins.str:
        '''The concrete ROS physical stack name.

        This is either the name defined explicitly in the ``stackName`` prop or
        allocated based on the stack's location in the construct tree. Stacks that
        are directly defined under the app use their construct ``id`` as their stack
        name. Stacks that are defined deeper within the tree will use a hashed naming
        scheme based on the construct path to ensure uniqueness.
        '''
        return typing.cast(builtins.str, jsii.get(self, "stackName"))


@jsii.implements(IRosConditionExpression, IResolvable)
class RosCondition(
    RosElement,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.RosCondition",
):
    '''Represents a RosTemplate condition, for resources which must be conditionally created and the determination must be made at deploy time.'''

    def __init__(
        self,
        scope: Construct,
        id: builtins.str,
        *,
        expression: typing.Optional[IRosConditionExpression] = None,
    ) -> None:
        '''Build a new condition.

        The condition must be constructed with a condition token,
        that the condition is based on.

        :param scope: -
        :param id: -
        :param expression: The expression that the condition will evaluate. Default: - None.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a4adeb2f3dbe000bfb1c7ec7bed924206f4df34a2bc64ad2e4e1e1504e7a7c13)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
        props = RosConditionProps(expression=expression)

        jsii.create(self.__class__, self, [scope, id, props])

    @jsii.member(jsii_name="resolve")
    def resolve(self, _context: IResolveContext) -> typing.Any:
        '''Synthesizes the condition.

        :param _context: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e2ef9d8bbd99a6ab400cec2a3268734727521372a8f3dd11a561cbbfceaa382a)
            check_type(argname="argument _context", value=_context, expected_type=type_hints["_context"])
        return typing.cast(typing.Any, jsii.invoke(self, "resolve", [_context]))

    @builtins.property
    @jsii.member(jsii_name="expression")
    def expression(self) -> typing.Optional[IRosConditionExpression]:
        '''The condition statement.'''
        return typing.cast(typing.Optional[IRosConditionExpression], jsii.get(self, "expression"))

    @expression.setter
    def expression(self, value: typing.Optional[IRosConditionExpression]) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__320a90f621af7519a0584bb43b35d213f2c135a2982b42bad6edb3d7ff01f842)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "expression", value)


class RosMapping(
    RosRefElement,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-core.RosMapping",
):
    '''Represents a mapping.'''

    def __init__(
        self,
        scope: Construct,
        id: builtins.str,
        *,
        mapping: typing.Optional[typing.Mapping[builtins.str, typing.Mapping[builtins.str, typing.Any]]] = None,
    ) -> None:
        '''
        :param scope: -
        :param id: -
        :param mapping: Mapping of key to a set of corresponding set of named values. The key identifies a map of name-value pairs and must be unique within the mapping. For example, if you want to set values based on a region, you can create a mapping that uses the region name as a key and contains the values you want to specify for each specific region. Default: - No mapping.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__339c8731b33058714cd4c46bb12532db7cb165d85986335505599f486cb0e2e1)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
        props = RosMappingProps(mapping=mapping)

        jsii.create(self.__class__, self, [scope, id, props])

    @jsii.member(jsii_name="findInMap")
    def find_in_map(self, key1: builtins.str, key2: builtins.str) -> IResolvable:
        '''
        :param key1: -
        :param key2: -

        :return: A reference to a value in the map based on the two keys.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__2700068fd9ad29f35ddcdc8992b2ffd67e016c0cc7343a6e921126ab1927e842)
            check_type(argname="argument key1", value=key1, expected_type=type_hints["key1"])
            check_type(argname="argument key2", value=key2, expected_type=type_hints["key2"])
        return typing.cast(IResolvable, jsii.invoke(self, "findInMap", [key1, key2]))

    @jsii.member(jsii_name="setValue")
    def set_value(
        self,
        key1: builtins.str,
        key2: builtins.str,
        value: typing.Any,
    ) -> None:
        '''Sets a value in the map based on the two keys.

        :param key1: -
        :param key2: -
        :param value: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__bf0fe656246b94ac6fc706854b81700474ad2a9a16e4cb7a23e1b55588f7ec37)
            check_type(argname="argument key1", value=key1, expected_type=type_hints["key1"])
            check_type(argname="argument key2", value=key2, expected_type=type_hints["key2"])
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        return typing.cast(None, jsii.invoke(self, "setValue", [key1, key2, value]))


__all__ = [
    "App",
    "AppProps",
    "ConcreteDependable",
    "Construct",
    "ConstructNode",
    "ConstructOrder",
    "DefaultStackSynthesizer",
    "DefaultStackSynthesizerProps",
    "DefaultTokenResolver",
    "DependableTrait",
    "Dependency",
    "EncodingOptions",
    "Fn",
    "FnAdd",
    "FnAnd",
    "FnAvg",
    "FnBase64Decode",
    "FnBase64Encode",
    "FnCalculate",
    "FnEquals",
    "FnFindInMap",
    "FnGetAZs",
    "FnGetAtt",
    "FnGetJsonValue",
    "FnGetStackOutput",
    "FnIf",
    "FnJoin",
    "FnJq",
    "FnListMerge",
    "FnMax",
    "FnMergeMapToList",
    "FnMin",
    "FnNot",
    "FnOr",
    "FnRef",
    "FnReplace",
    "FnSelect",
    "FnSelectMapList",
    "FnSplit",
    "FnStr",
    "FnSub",
    "IAnyProducer",
    "IConstruct",
    "IDependable",
    "IFragmentConcatenator",
    "IInspectable",
    "IListProducer",
    "INumberProducer",
    "IPostProcessor",
    "IResolvable",
    "IResolveContext",
    "IResource",
    "IRosConditionExpression",
    "IRosResourceOptions",
    "IStackSynthesizer",
    "IStringProducer",
    "ISynthesisSession",
    "ITaggable",
    "ITemplateOptions",
    "ITokenMapper",
    "ITokenResolver",
    "Intrinsic",
    "Lazy",
    "LazyAnyValueOptions",
    "LazyListValueOptions",
    "LazyStringValueOptions",
    "NestedStack",
    "NestedStackProps",
    "Reference",
    "RemovalPolicy",
    "RemovalPolicyOptions",
    "ResolveOptions",
    "Resource",
    "ResourceProps",
    "RosCondition",
    "RosConditionProps",
    "RosDeletionPolicy",
    "RosElement",
    "RosInfo",
    "RosMapping",
    "RosMappingProps",
    "RosOutput",
    "RosOutputProps",
    "RosParameter",
    "RosParameterProps",
    "RosParameterType",
    "RosPseudo",
    "RosRefElement",
    "RosResource",
    "RosResourceProps",
    "RosTag",
    "Stack",
    "StackProps",
    "Stage",
    "StageProps",
    "StageSynthesisOptions",
    "StringConcat",
    "SynthesisOptions",
    "TagManager",
    "TagManagerOptions",
    "TagType",
    "Token",
    "Tokenization",
    "TokenizedStringFragments",
    "TreeInspector",
    "ValidationError",
    "ValidationResult",
    "ValidationResults",
]

publication.publish()

def _typecheckingstub__748c8a4f3f80cbb46f7db3d45e1fc62f897a813df65337c1692a26757af6df49(
    *,
    auto_synth: typing.Optional[builtins.bool] = None,
    context: typing.Optional[typing.Mapping[builtins.str, builtins.str]] = None,
    outdir: typing.Optional[builtins.str] = None,
    runtime_info: typing.Optional[builtins.bool] = None,
    stack_traces: typing.Optional[builtins.bool] = None,
    tree_metadata: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6a47bad65275b85b8612877823d54537652d86b16d9cc47c3f0fe2e682cad87e(
    host: Construct,
    scope: IConstruct,
    id: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6645ca4ad5ccd4cd68a4050a9e5c2511fdb248cb9310394c721b1c69950e5975(
    node: ConstructNode,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__df4441eafb1cb1046b32ca5295d005d3131df919989d3b694d1ce2e3881d2b51(
    node: ConstructNode,
    *,
    outdir: typing.Optional[builtins.str] = None,
    skip_validation: typing.Optional[builtins.bool] = None,
    runtime_info: typing.Optional[typing.Union[_ros_cdk_cxapi_45dace6b.RuntimeInfo, typing.Dict[builtins.str, typing.Any]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__15d58cf30911824dccc4b726e85b99d3c5af21fbe85acb679afb5632b9b4410b(
    node: ConstructNode,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4621c8e910f9ed69913adeffe0161d40cfde5ebadeba3e7bd20a4b0cfbfee3b9(
    *dependencies: IDependable,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5828fca22ddd84c8c5f392d283078c4556c6a3104e3afda44917f05f086da22f(
    message: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7f520bb9a468976f66105a240b5a66c7ade94873ab55373e1ac571b500c21d6a(
    message: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__959c55db0db52728d3f598e4c83dd98fc47eb2297c12d34642150aad945923fd(
    type: builtins.str,
    data: typing.Any,
    from_function: typing.Any = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__570f16aaf6d6ed0a36aaf59690d63691db9c638fa7db4426ffff61a3eec2507a(
    message: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f373a014879a19ab5383814e7c60e2fdc9b85ff481266088ce12f7a126854d60(
    order: typing.Optional[ConstructOrder] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d4e9a97593ce9f2c58b87536455eb37e870708a060b383b357d9f6fcb2469e26(
    id: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ffc85bdb046e28e24026eca3ca7feb5e1cbec09d4e2d58eb5f259741e0f5805(
    key: builtins.str,
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5cbe01369ed9844edb9ceff08f9f1d6ffdf493083e9de9b90f37b2eb7024c63c(
    id: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0d5e8d9fc5378c36b1914ff9ef3d1743c82cf3a6020c5d4b16ef390692134d84(
    key: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4528d4bf540c03795edbfe799321d679a7800f5bda281eb50419a46623ff4eb1(
    child_name: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1122548f7c053a88310186a509d813226fa408734e0b465c5934441a333f1cf4(
    value: typing.Optional[IConstruct],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ba524959d80a1a88eee86a3a039a209594e07b39da331bb1cafb9fc849c5a97d(
    *,
    qualifier: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__be877a98a70eaf2e415053ecc3597f54d82bf1b02ab801068be53d34c3645e0b(
    instance: IDependable,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__27f51d221a1d3f0592bfeaf5e954b8d1ed157c843e51a32099396c3c78cc123d(
    instance: IDependable,
    trait: DependableTrait,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__be971e1a5b7d053e1a29fe327cce65a823280ff9c0231b2ae0a5de6c0c9cafaa(
    *,
    source: IConstruct,
    target: IConstruct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__592ddd870eea1153b99934c7382cc772fd9c62743fc04f026567e47d474c14a6(
    *,
    display_hint: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c4463aa739260d8ce63c1fc5c0d0104b648438afea3cc84fd0508ce2ff89e41d(
    values: typing.Union[jsii.Number, typing.Sequence[typing.Any], typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c4603e8d5b00df56f000c5dadb14d841aa452846777e902e565f1c0b2decdd8c(
    ndigits: jsii.Number,
    values: typing.Sequence[jsii.Number],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5654a30fb1a45859f496027acf7a03d482124e055620291bac9e02da204e9cb6(
    data: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ce3856953e5d2815bfc23c0d182df0cf035b30feda4d849f172136dd500a32a0(
    data: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__247d1bde91a0d2f5bdbe0d77b1d77116951cc7a286d8876b7ee3c841e3d01986(
    values: builtins.str,
    ndigits: jsii.Number,
    para: typing.Sequence[jsii.Number],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1d3b053d7bd2380d1777011cb385769042414d91dcd1ac5c5d4126a11fb6ced7(
    *conditions: typing.Union[builtins.str, IRosConditionExpression],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c32d8c967b76fe1b22006921d766d24460ced611ddaeca23b0cef97797df9dee(
    lhs: typing.Any,
    rhs: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__98d6a20e1d755c3448e9346d51da27f01a171bd61c63ea885517e0002d03b1c1(
    condition_id: typing.Union[builtins.str, IRosConditionExpression],
    value_if_true: typing.Any,
    value_if_false: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d0f1efc96374482cd77e5e775be7aaf6b0826705fbb51a9778b524db9beb7f5b(
    condition: typing.Union[builtins.str, IRosConditionExpression],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__87426609e3c35a1db0e27d2a3800878e1f22676645588ff18f69707d682c3b90(
    *conditions: typing.Union[builtins.str, IRosConditionExpression],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__483847ae80b6d31323ba40a393751618bf0a768d1d766b45ec2a6e9a1c81cbfa(
    map_name: builtins.str,
    top_level_key: builtins.str,
    second_level_key: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8c616186d3b472030fc6ff0709da54ba8f4263acff902f4e13dc63abddb12693(
    logical_name_of_resource: builtins.str,
    attribute_name: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d5df40a11802df885fed03fa5ee963ab074e2dd8e1f13cd43d87df7b9facfb9c(
    region: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9bec0ea9134fb15498bbd9212d243dbe6cb81310293221509061e9dbe3df6313(
    key: builtins.str,
    json_data: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ffa0ab99cd7d646eb78d61ad0b07aa230afdb88914c828db09aaab14cf714839(
    stack_id: builtins.str,
    output_key: builtins.str,
    stack_region: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__88f3fc6721043fc599f60ea05b463881dcf4075d5127c09179c02a1690454ef0(
    delimiter: builtins.str,
    list_of_values: typing.Sequence[builtins.str],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0bf918016f24f24d6d8d161b6d860b5a0b5506fe4d57b968ce44fea4797441b7(
    method: builtins.str,
    script: builtins.str,
    input_string: typing.Union[builtins.str, typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__418ce724afaaaf93016caa6baae8868b58470039ae7a0209173008f801bd0cce(
    value_list: typing.Sequence[typing.Sequence[typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2c2a2d4a102c055ada8b542f1e629eebbdc2c3b23b6ec2f9d3156425c6e0acfe(
    values: typing.Sequence[jsii.Number],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__82b64e548b2fe149619ab5ddf83a2692c9fd8f25ee48e660845b06e12306d617(
    map_list: typing.Sequence[typing.Mapping[builtins.str, typing.Sequence[typing.Any]]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6fc4584dee600015afe6c6649a88dcc4e525cadcf95374eb87929129b2f3ef1c(
    values: typing.Sequence[jsii.Number],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5e9634d4ce38e42ffeb12b5d5faf8aa2a239fc7e2f6389ee89c22a433f482341(
    logical_name: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1f093db3c371af0aa55cd98c01151e474879cb90d07575abea0e5cf971413df4(
    replace_data: typing.Mapping[builtins.str, typing.Any],
    content: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9b26926a5816f273496a6351b2085fc2ed9f3fafe5e2353790c65e10563fcf72(
    index: typing.Union[builtins.str, jsii.Number],
    array: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__14777cebe9bed53e78225c85b1b6b1636e8831c632317c0d9b6cec030eb1e31c(
    key: builtins.str,
    map_list: typing.Sequence[typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5e40386a7e03a946cc861ea88a3c7bc073d133b957f617719c7c9dc19f966c12(
    delimiter: builtins.str,
    source: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__00895398044099548c609b2ecdc6200196f3347f2b3473fae8a7dd295d6a55dd(
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__936318f7d306dbbfa94357c01fc7ea166b43b16cc0756f030d327ffe3a409e5c(
    body: builtins.str,
    variables: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c17c877cbc31bd56fc0d0ada8af1359356a47e367984086f30dbdd1e8909805d(
    context: IResolveContext,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0c52de30a7fb0655b01843c16a129e0a7eebacf9016fd797efec15cd3678577a(
    left: typing.Any,
    right: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1465a36c9a263cd138c4c560a149095fbdfecd574cfbe3422439e98c3fbdf2ed(
    inspector: TreeInspector,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__767ea28bc08d47b0e1f0d4765fe0bc3f22c8289fee8b2e194da7d57277824f5a(
    context: IResolveContext,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0831a2456f0182fa20ecb7b158e0a1186592cd9b986aa74ba61a4a4d1bbc0611(
    context: IResolveContext,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__15f5bff2f879cc4cc32197c0039cad4b57418edeed34a996ca4874cf726ea5d4(
    input: typing.Any,
    context: IResolveContext,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0955aa64060a165ec5f774d258aa1859e4c9a08ded723ede00b5c1bdc9df52b3(
    context: IResolveContext,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__015447ccb4a9906395b20fd902cabcd4597a590171c08295f278be5342f4e7e3(
    post_processor: IPostProcessor,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__20944a7cc00f2136f1d3365c36cfc599ebe106e8d4cdddf174ebbd715657933c(
    x: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6b9af138a0065ab24db0137ba4df5cee7e42b723f07b919cba01deb86f6721d1(
    value: typing.Optional[RosCondition],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__19ccbf023e632728666a7277d8c6574e3cf45a8648865fbe9b2af9d1ae076fb7(
    value: typing.Optional[typing.Union[jsii.Number, IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f1cddf5277a3c64108ce0c15fa5faa290e10d8d379815c3af84baaccfc3808ac(
    value: typing.Optional[RosDeletionPolicy],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__35f4c58d13e139e5c6223bdbf53164654b2095b5fd91c1bf7e993bd3dc84140f(
    value: typing.Optional[builtins.str],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__71a66b9935f95fe5d4e4f70341aa002ed47fa3648ffbbe393e5120f0f1087c43(
    value: typing.Optional[typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4a06319e966e22b6794f594e79b9622c69452df8b350eb1db66803917ce61c9c(
    stack: Stack,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__51447d13933e5456a4c6300399eb55ac5df14f92fa88bc9f6722990b9f25fe80(
    session: ISynthesisSession,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4459cd8f8716a48963ca392c9ef233a3a6f41bb3af29ad7cc2c41f450aa8713d(
    context: IResolveContext,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1c1cff4576a8245902913886959c7001a767c437b52225234ea1b9baf6a9e05d(
    value: _ros_cdk_cxapi_45dace6b.CloudAssemblyBuilder,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d2762b383cd1433befe9d900f9538105bc7ff724b6f3bd94e9babdde6b6b651f(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__014ac8e6afd23cc5d8dbaa362ea76b16a5188f58d5d520c3fb9b08768d065850(
    value: typing.Optional[builtins.str],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bcca51c7205afe0a4756cb9a5de79e6efe34349870e4aaee85d9de6f3b426dbb(
    value: typing.Optional[typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__06428b1b28ed30f0c1384a6d5a13aa09e69ba4094155ef9bff2074261f64bc85(
    t: IResolvable,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6e2496293c1d52f1d1a1d7cb90d199bc2d95c0efc70ec58bef81c5e92e78c6c2(
    l: typing.Sequence[builtins.str],
    context: IResolveContext,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ec6d2795c1854413fd11b04f75ac05db5d3e9ebda3e0c44fd5c5519a148c471f(
    s: TokenizedStringFragments,
    context: IResolveContext,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b83a71c854922c76207ee3305ff734b2f1aaa0a7a12636de23ff86f45b756041(
    t: IResolvable,
    context: IResolveContext,
    post_processor: IPostProcessor,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f690835f92182062a506fffc4e9d3275914ee37a6eb328a1e03037ac62192123(
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a9d6cb405f1dc003d11ded0e2fcf4924af28d4bb81a501991a861ccc28b25294(
    message: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6ed11c272182745b8f071c64a59933a914b55021a02f39aebbbdaed7955fcf4a(
    _context: IResolveContext,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__855c3b8f704d5568c58b5eaf5256d1f96e8973533df785d2287a1fa17f8e0625(
    producer: IAnyProducer,
    *,
    display_hint: typing.Optional[builtins.str] = None,
    omit_empty_array: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9d27bdcb87429f6c1ad1c6a63e4fa7f37ec6b156995dd935db8c0232ba62cfb1(
    producer: IListProducer,
    *,
    display_hint: typing.Optional[builtins.str] = None,
    omit_empty: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__eb3d27bb92f07376c0671ce2a29b9e0322a5e620e9e5d9261fcc112c7dd83880(
    producer: INumberProducer,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f6b154666a2f7bd28fa1944715b8f57b93cf5a42b94aa1cc51b4c287075e2e6f(
    producer: IStringProducer,
    *,
    display_hint: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__459da39148795d4a2ffdb32575cd274897146155c51dea7f0361cb43373e04b7(
    *,
    display_hint: typing.Optional[builtins.str] = None,
    omit_empty_array: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f43363319a77742c2083fd9d84db3926afdc535ad84dd79e943bb24b761be25d(
    *,
    display_hint: typing.Optional[builtins.str] = None,
    omit_empty: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__11154e9acb99e91fe8a38a92330e2004810b345c011269ed4ae3381d938718d9(
    *,
    display_hint: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__25327f9b7ddf68f2c9dae74053743641437aa840308c92297b09ca5ce4b2daad(
    *,
    parameters: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
    template_body: typing.Optional[builtins.str] = None,
    template_url: typing.Optional[builtins.str] = None,
    timeout: typing.Optional[jsii.Number] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1f8dc2790577ee818f6a8555fec401bd0e2aad0ca17cbcf1ad940dc9bc4fe6f0(
    value: typing.Any,
    target: IConstruct,
    display_name: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ac9bc39f84fa4ed07ec85a081144f2a366bff3352728edce92eb3a3ff10c4f12(
    x: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__555f312cbc4130456a07898da4b77d3db0176039426274e8555cce2bfbd8dfc7(
    *,
    apply_to_update_replace_policy: typing.Optional[builtins.bool] = None,
    default_policy: typing.Optional[RemovalPolicy] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1cf5324bcb826f8eda6917454783379af5c03bb9882d50455f1f28ea76eabbf3(
    *,
    resolver: ITokenResolver,
    scope: IConstruct,
    preparing: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5eb39483257934b924a474a55b25ee60c39f38148113cb72ba8962bb0da42ada(
    *,
    physical_name: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f534de3d8e5fcb3d98fa2b9d753eded2ae1398e9c0cfaa50692ce7724b85d774(
    *,
    expression: typing.Optional[IRosConditionExpression] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dcd93622adc1517313de11a1d1758998640b5ec2e8e86746a8317929c727ae61(
    *,
    mapping: typing.Optional[typing.Mapping[builtins.str, typing.Mapping[builtins.str, typing.Any]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ee818edecc8dc711db71a3f783f7d205fa34f9482dad186f363524140313425c(
    *,
    value: typing.Any,
    condition: typing.Optional[RosCondition] = None,
    description: typing.Optional[builtins.str] = None,
    export_name: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c39b9c0a543f07fdf20a7f9378ee395653a40289a7101cf922b7de73c8a5047b(
    *,
    allowed_pattern: typing.Optional[builtins.str] = None,
    allowed_values: typing.Optional[typing.Sequence[typing.Any]] = None,
    association_property: typing.Optional[builtins.str] = None,
    association_property_metadata: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
    confirm: typing.Optional[builtins.bool] = None,
    constraint_description: typing.Optional[typing.Union[builtins.str, typing.Mapping[builtins.str, builtins.str]]] = None,
    default_value: typing.Any = None,
    description: typing.Optional[typing.Union[builtins.str, typing.Mapping[builtins.str, builtins.str]]] = None,
    label: typing.Optional[builtins.str] = None,
    max_length: typing.Optional[jsii.Number] = None,
    max_value: typing.Optional[jsii.Number] = None,
    min_length: typing.Optional[jsii.Number] = None,
    min_value: typing.Optional[jsii.Number] = None,
    no_echo: typing.Optional[builtins.bool] = None,
    text_area: typing.Optional[builtins.bool] = None,
    type: typing.Optional[RosParameterType] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8ddbb242164b50fd9890ea53698b2754f764c707d0eda9dcea236241f154b189(
    *,
    type: builtins.str,
    properties: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__48ebd8113f5a95e7206754d99c94b514bab899631027b98c5b25c87874858e36(
    *,
    key: builtins.str,
    value: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a951b9e38e4266f7795d9cf17d13c5cab9723d247372544c2ea0f1e1034a0ddd(
    *,
    description: typing.Optional[builtins.str] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    metadata: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
    stack_name: typing.Optional[builtins.str] = None,
    synthesizer: typing.Optional[IStackSynthesizer] = None,
    tags: typing.Optional[typing.Mapping[builtins.str, builtins.str]] = None,
    version: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0b4d117a06de3b8d93c347567af09a0e7660f43182f1b89b3d9b139dfc7315a8(
    *,
    outdir: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4840d4380846528233f8217e18a55e03a4a174196e2c0e4f2e2111b8cfd9d593(
    *,
    skip_validation: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aeb329831e76fa2de1f9eedf7841ce46f3da80065f0977e8f9f2d47cf23f4827(
    left: typing.Any,
    right: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b34253714854164c90ac2f1ce4bd38e20e18b53c45053e143999cad2d528be12(
    *,
    runtime_info: typing.Optional[typing.Union[_ros_cdk_cxapi_45dace6b.RuntimeInfo, typing.Dict[builtins.str, typing.Any]]] = None,
    outdir: typing.Optional[builtins.str] = None,
    skip_validation: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b31f0916603b9ac0a19041d432d8b63a66c9d635884be9ce7cfe64043d13b996(
    tag_type: TagType,
    resource_type_name: builtins.str,
    tag_structure: typing.Any = None,
    *,
    tag_property_name: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5e3db5dabbad4d55b94d26d442069e119d50daaa4b8d2f279a7dbb32281bf0cd(
    construct: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4e52e20f19c15005b1419702493d03ce70ff0090e04c7b0116e7842aaea82195(
    include: typing.Optional[typing.Sequence[builtins.str]] = None,
    exclude: typing.Optional[typing.Sequence[builtins.str]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__607bb507ff316ca9882e67bbdda771afd44a804d1822223bddac5091599672e3(
    key: builtins.str,
    priority: jsii.Number,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1b5c4a3cfda8aa538d53e13c5614c2be4dcc0dd1693e8a3c09b4896ee2915fa8(
    key: builtins.str,
    value: builtins.str,
    priority: typing.Optional[jsii.Number] = None,
    apply_to_launched_instances: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__762aea27829aa2022727347af6041130cc95adf01466f33b366e43fc81c7d366(
    *,
    tag_property_name: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__10cbda2ba292cace9348c3269b4a0e4ef2c137fd31c2cfe347e37b9a82a42113(
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8f4e057c19741202d697745f96cdac2507420fb69665f906cfbf139e83e5c25f(
    value: typing.Any,
    *,
    display_hint: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e810b924d685cb48f32839a0b7f6c794e8e7479f053d6175afb6b297c374c257(
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__42e46304e3c03d9f33a2ee730e211b7adc4b55bc70bb89dc7321d0d2f309c2f3(
    value: typing.Any,
    *,
    display_hint: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__44124ba50108ab8e08c87dd89f6eb94b1a0664a5a3b1da6f8700b15789bf11e3(
    obj: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__40a96ccdbe485dab06de95cb233d33fad660624b380a8a8fb2344c6aaa56d74a(
    obj: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c89018313fbf500beba9c940ccfdded3a6dd1cb684bcf03e9daef7e54d3978fe(
    obj: typing.Any,
    *,
    resolver: ITokenResolver,
    scope: IConstruct,
    preparing: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9e55de9d18756386134ebce512c21523d92c378766278fc50534a8cd1668af16(
    l: typing.Sequence[builtins.str],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e5e35a2fe0dd0bc9b2fdc457c232db0df1e729aec4917cfa407e15a0421c7439(
    n: jsii.Number,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4498b1ae96d2081b3636f64315f9a32e7d913a0ebb0c9043445603ef9c73ecfa(
    s: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4baaf0fdb93d747169ccfac8fe3c052c1e366aaa3cf94c4c3ed6cf21994123fb(
    x: jsii.Number,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__299944495831f0351a5c3fbe9fda834ddf89ee24168fc7a0f7401221decb1d5a(
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2afff4a4b2f29e3e273f323f6b9d7e749e21718257d27356f4e9425c85d64467(
    lit: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3e46e28eb8bebe2734ab7401ad99908b2f4d641e7cffad9589a1c9df06b57557(
    token: IResolvable,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c80dc9e0477ad2aef93147913606ac3e6d84dacc0d042dcdc512372c14420f07(
    concat: IFragmentConcatenator,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__67ffc6b31d0552ac1f075e597446ec4e3590af7972656e2a81c0453e5d48f60f(
    mapper: ITokenMapper,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8160540b1b0781396fbb49de8909f485bc6847f12b06c284899426a5ba73d702(
    key: builtins.str,
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__24c461a233468bdd35c3de4534cc3efeef61b40de176800f40e33fe5d9b63935(
    *,
    message: builtins.str,
    source: Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8464e23dc0647f104591d2538171583569e436394676dc7eacc14605f4bc6c6f(
    error_message: typing.Optional[builtins.str] = None,
    results: typing.Optional[ValidationResults] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__14b5bac0e79db41ff39720d1056b6d3ad3381b18f0245a6992c93703c07bc82f(
    message: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d22e62cd44b29ae7387d4d18bcbc2e8767111e1b9f70ad6d9bbaaa972ec3b410(
    results: typing.Optional[typing.Sequence[ValidationResult]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ee64811eef3876aca433a599fde8c5d35b893f421e7c1492cdbaf75d4a580c38(
    result: ValidationResult,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__097ed477d8f3d33cc0e8be9230f76e3de9bcc8e9f3f4aa640fb62bd5ea9e213c(
    message: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4403f3c33afef1e6ba1ccbadc87ac1ddd05aae6b7a400b3cbd85a043d7d85462(
    value: typing.List[ValidationResult],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2aff3187c70abf274ed13cd4a3f2e4998d0f0992886e51edb0da1d043b8c4479(
    construct: IConstruct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__056834e8ea5e467b3e578dab4687464feb942970071b2e92b431cb79e887b6e4(
    stack: Stack,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c57938c57f0e21ffd21d8acfc12cedae1a940974abf5c9d97f6e3a44fef3f31a(
    session: ISynthesisSession,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9727b4179c0e167b591e6d6381af6777aa5c0bc173a9be06c520752e6276a79b(
    concat: IFragmentConcatenator,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__216b9096fbe63ca7f074fc29e40563204d6f77fcf26ca8d257635a47aaf5654c(
    xs: typing.Sequence[builtins.str],
    context: IResolveContext,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__94afe6ae9a614e95657ec50260cbe8a8f37f3334a6f8e36774cc6d50076adce9(
    fragments: TokenizedStringFragments,
    context: IResolveContext,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c53a6ef11bc0db98771275f3ebe02ae5f19946dcc1e5c5d6d3b3d064bc41fc0c(
    t: IResolvable,
    context: IResolveContext,
    post_processor: IPostProcessor,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__686e2b42bbe4af2a65edd2cbf32a76d1c722ba8453b459409936c8b9aa9fbf03(
    values: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__45110e0d6534b98ed8e6e9281dc23a01599642f85573bf97ad8d584b97f59491(
    *condition: typing.Union[builtins.str, IRosConditionExpression],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b9524542b26c45613494832a6e6412d4cdfe45869ceeabd7ee930da6b0ef7ef6(
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__52065ec56e8eae2266f840354d908795d211fda0f7050a5d39c062982a080ba9(
    data: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__40e0d55844e1804e912770b8e7c076cfb38b59071e09baebb42b3e5e0e337fe0(
    data: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__26465fde8e7163abd6f7cb2de91952795d430f22b34a8d6cf28a0ef4761de891(
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b3cc295f516f290459b1196f5b3f00e46e3c192dc4ac112e357e96a209e33fad(
    lhs: typing.Any,
    rhs: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__dd98760b6a01e88e5ed5377b56f290262fd96f6703c0328839b0e0668e6ddafa(
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__99a58fd57d7de4274f57bce0fac8696676b644b6bd94046816eaa33980856884(
    region: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0bf228358201491aaacfb32677b98c44e0d2791cbef92d2c13a4a1b612a88544(
    logical_name_of_resource: builtins.str,
    attribute_name: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5a2e3c1b3ac88b16338cbf206af8919482beb8d247ee3ff3215f49de03ddf0de(
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__16e5baaf8cdfb71cdcdc61ee86e19fbe34de66252cc13ec6e10d05b56b2cae67(
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bd45b41054d6fd402e50eb7829f1b272ebdac9695a6aa57470cb2b3361cd658f(
    condition: typing.Union[builtins.str, IRosConditionExpression],
    value_if_true: typing.Any,
    value_if_false: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e0122df383b5bc5fa6367cdb94a99ac0174bb8f1f325bd5ed5b2f6ecc4dca2a6(
    delimiter: builtins.str,
    list_of_values: typing.Sequence[typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__61ef76dd29f6e730b8a873263bec53e01d984484dab8e4c18002a13641acee47(
    context: IResolveContext,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8eb62c800fcae67b10a7b5c30ccb3c039f73b92a810339966810785336b14d0e(
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e8c35bdce19ff8d2ea687c9a63e379a6babcc6ff8119fd475f25f1b5ea1c25ee(
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9c01b3caf582f9af877e56cc694bb360a2085322725b78786274d824cdaf2072(
    values: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a615ab5ca96cf38319d0e6b4a376abfa40a4feb616ea507c962ee6cb7b1690bd(
    map_list: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b9b3bd114c9b3dc0c6ac49a5be7ec7f0bcbbb1ff5fa2912854055f81c5b00296(
    values: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aa8f0c940a166a4c70ea31088c6453e4302d5d801015d2550db27f2ec81e930b(
    condition: typing.Union[builtins.str, IRosConditionExpression],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__adf2e03c690c3cb28b74e88982a4889d3b0d5b54d92b5a3556624ce9a9f7fd8a(
    *condition: typing.Union[builtins.str, IRosConditionExpression],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__61889f70542841a7dcc6f9a86f78d58f369a603f32fea0e24af9a0038e420cf1(
    logical_name: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0250eb79836dc506c39f785b743b8af41f55a581763ad1190d251682df8b0555(
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__29fbee6c85e18606ce841248ed899786d11cbeef5717939d92fbf8662a5a02e5(
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7943bda42cbb6b91580503ce70079765bd1027495853a52b7c78d1715d76e8ef(
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2102430162bd15106fa9023902fbaf95aa0321bdc3212c478770febe2a0dc945(
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b00749cf94b050e10d4ab91960af1d49a86a78183b31830079457c840eb9cb2f(
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1d91ade8c7dd39fea016dc553268e72b597d83596b15dfa5cf4baa2671204f76(
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5ecfb8f7a776d0de65e015ad8172e9f8a178dfc04f8dec1b2457d86c1bcce877(
    scope: Construct,
    id: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d81f1bc767e0d25084ea165ce16fa1c230bffea60cbe788385d3a0c0464589a7(
    x: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4197923b6ab33eb87eae536a39bd7d210a48cd7dc85d241d4a8085cdf3f7dc33(
    session: _constructs_77d1e7e8.ISynthesisSession,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2f7caf605f353ebe34c5a2ec53efdef2cfa7107d02aeed0f97d720b59659e706(
    session: ISynthesisSession,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__033bb68d0358ede779f4100fe0f171f4f4096ee9aaa265cd7450816e13f088d8(
    scope: Construct,
    id: builtins.str,
    *,
    physical_name: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0aa8adb2d892faa138aee5c2af9a6cbbbfc9d54b43889d0799eebf9400b57059(
    condition: RosCondition,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9a26f834a04528bb7b9d99cd6a3b1c1f5afa6975f3da82cac68b4b711b4c0f75(
    count: typing.Union[jsii.Number, IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__72092dbfe054fc98599cfa5aeeb4d43af094fa113e4c033759d9d0e9e97c531c(
    resource: Resource,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d2de7567d682f0d1123dbb1b9b79114ec2ae9f54c7129f94c03a3d2eda6e46f0(
    desc: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c6f59019a6cdb5178ab386365e04a087fe7d1567a3b3f2ad94de5f8bdf660ae7(
    policy: RemovalPolicy,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5e2160cb5dc7359592892c674d564da7c8414d648c824034201bd3dd82ec0bec(
    name: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6a9029d185d924daa02b18c58064fef6c16d7b34e4f28fccbe1b8eab51797cd4(
    key: builtins.str,
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f9d9dbf8b7f0d7f6cdf67a80e6264fd20b981f29db775ecb90841534c8fff724(
    value: typing.Optional[RosResource],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__47cdb0909e8e294d54ce6c8ae50dfb95c5fdf1709eb8ea16fdce2ef2e8f73e7b(
    scope: Construct,
    id: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3d40a5c72ddbab2cda8b7e6ef044a141113184fda4c3aa8716c67666d897bd3e(
    x: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__08dd30761a553a2adc5e01c01d68f30e8ddea800911818c648f0a49c635f69fb(
    new_logical_id: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7300de86255b954db919450213cdd6104ff126ec38b173084a8af111ebb6bf42(
    scope: Construct,
    id: builtins.str,
    info: typing.Union[builtins.str, typing.Mapping[builtins.str, typing.Any]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__8b371b50c0476a22f7da554b0ef5e1b89dc247a8bb992c6f86b2ed7c09e0892e(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__aa96b151c96eada05a9d3b279fb66e4cb84bb539d53d0fa549a3a8b5409590e9(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2e410986d9d6502c50d2359c177f56480efe88b9aaac9a2dc2b6b21f61681483(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__94e885e07ee948b0adff014e19a0ee4e877f020a16bf7c546ccca03bdd02e8d0(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ddd2ed831ba9eeda3b15433187523442a685f4956efb14117d5dafc98c124d14(
    scope: Construct,
    id: builtins.str,
    *,
    value: typing.Any,
    condition: typing.Optional[RosCondition] = None,
    description: typing.Optional[builtins.str] = None,
    export_name: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b7aaa28eb232cdee9e75f6952c8ab6cf5980c389158bbcfa89b4f4432767c575(
    condition: RosCondition,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c1eedc66bdf3ec0f47726c50b7cb3a20ea4c777331c44e83e7720074022f7d61(
    scope: Construct,
    id: builtins.str,
    *,
    allowed_pattern: typing.Optional[builtins.str] = None,
    allowed_values: typing.Optional[typing.Sequence[typing.Any]] = None,
    association_property: typing.Optional[builtins.str] = None,
    association_property_metadata: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
    confirm: typing.Optional[builtins.bool] = None,
    constraint_description: typing.Optional[typing.Union[builtins.str, typing.Mapping[builtins.str, builtins.str]]] = None,
    default_value: typing.Any = None,
    description: typing.Optional[typing.Union[builtins.str, typing.Mapping[builtins.str, builtins.str]]] = None,
    label: typing.Optional[builtins.str] = None,
    max_length: typing.Optional[jsii.Number] = None,
    max_value: typing.Optional[jsii.Number] = None,
    min_length: typing.Optional[jsii.Number] = None,
    min_value: typing.Optional[jsii.Number] = None,
    no_echo: typing.Optional[builtins.bool] = None,
    text_area: typing.Optional[builtins.bool] = None,
    type: typing.Optional[RosParameterType] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a28eb848a0f55c965d4c5b981426497b24a126948abc9ce0a408838596a87de2(
    _context: IResolveContext,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bc68be0ccd998c03d226dee9f58b58db58d51777d1dcb148ca8580210f62d8da(
    scope: Construct,
    id: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__941346c4ba544e38c6d484ee04db6f28c2e03e3998827ec04c07caeb8e3513b9(
    scope: Construct,
    id: builtins.str,
    *,
    type: builtins.str,
    properties: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__26a7a5bd0c2c812f4b7c3483c22ba2665d748cd34851f26f18d362f3b7641568(
    construct: IConstruct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3bab3990b90c81f3ea564fe13bb7a16fd3f3b943f93b68220c584761a015331f(
    con: RosCondition,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6dcfa9031021a07adecdb44494c0f0c80c2d66bd014996148e6443d50d8f4755(
    count: typing.Union[jsii.Number, IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5dc20ad26961aac937f4a09fe1babbdd7982bf6c0e340f79c2662c20030cd319(
    path: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4fcdc2057253d1e8056633ce513f71b142942e1b4c71bbd14bffbb951ce349db(
    target: RosResource,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5603f5e790e6800ca247898c0a76a748b08bdccea54b2f8d8ef44dcd446d54b3(
    desc: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e8d8fdbfca26a1b9c08967852905c7f2c18defd647238b134e1b34d1f98622c7(
    key: builtins.str,
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__de4d904e391329b12281f41d993ef7bec66f72067ac6df107010c7da6ad60fc6(
    path: builtins.str,
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e73a34b5fd578a1a0e6d239f8de7f429c7c7cb23dd01e234b26d2537a37db7e1(
    property_path: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3d3152a58d03df66e61a691c9a3e2407cd03751db0aa384483e63e6239031b34(
    property_path: builtins.str,
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__571aed41b9b5890cca2490033e2ffea5957ed69b0a36cc932074ac2aff4688ec(
    target: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f11f6c0e586fc49c3773a537af49ac2e497dcc49ecdecb8c4d92702a8e66a7e4(
    policy: typing.Optional[RemovalPolicy] = None,
    *,
    apply_to_update_replace_policy: typing.Optional[builtins.bool] = None,
    default_policy: typing.Optional[RemovalPolicy] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__01a8a56058b17a312f5ffb8ca87bdfeb2749ff430a4213b4a7dda2c476ab0ef4(
    attribute_name: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__980668d774fee5ae667c0a3cf02ce68aedfdf3b8f92d10348ec1a94883c0c78b(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__6e75c1ebcfe210720730289132506828c5a1e5c261f68ef912e260fdd4f28fd4(
    _properties: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__1dc168842bc69954d0e07ab74e7ad20f5227249df44949f4a202402c806ebe86(
    scope: typing.Optional[Construct] = None,
    id: typing.Optional[builtins.str] = None,
    *,
    description: typing.Optional[builtins.str] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    metadata: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
    stack_name: typing.Optional[builtins.str] = None,
    synthesizer: typing.Optional[IStackSynthesizer] = None,
    tags: typing.Optional[typing.Mapping[builtins.str, builtins.str]] = None,
    version: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0bc7e129e09b4feddab62e4966768ba39cbaed884489a9137f10d40ac2bf7db0(
    x: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b94641c207370c83802c8c71ec1c1b6f5bfe8e7d3d68b538d8e81241a823e1e6(
    construct: IConstruct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b4506fefa5dd69433347eb17079b665a7e5aeed444aaa064f41f02e964b224b2(
    target: Stack,
    reason: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__0af605d4b0354a6812eb679f03dc7800afa36dba79ee386d95519a3db2ca6977(
    ros_element: RosElement,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7bfdee0d9f37059144839af82465d446909bf1e3490f99384d011f1a8324a431(
    element: RosElement,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__af7bd001d5b018cf8e304d958695046f54f29932881a260dc73b7e680abb1f87(
    _source_stack: Stack,
    reference: Reference,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bbf09e8a560a6d2a51b85d6d34d59468e862c5d2438cfb9d51a67d4e52fc7683(
    old_id: builtins.str,
    new_id: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2df79660b12efbfa718154119699655340f2e0f1473b164ba21d864a85e698e4(
    obj: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__af0331c6d2a7f5ce9ffb0945062b3bd65a450e61fb33a74d8d8893038819f96e(
    session: ISynthesisSession,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__076a3f3e8ef5caf16f7c89a9161d7d167666b81169349270d1676da89018fb23(
    obj: typing.Any,
    space: typing.Optional[jsii.Number] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__9d3cc5431aa000ead0553b38893e095b0fff1ca6e8cfac885d80486e937a4dbb(
    scope: Construct,
    id: builtins.str,
    *,
    outdir: typing.Optional[builtins.str] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__57cc149bf33dfb1dd59aecbfb358c0d1cccf4e870c0cbf33c3e18336b7e6de8f(
    x: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__be7e7d60a27fba054f5fa1e6d28e319ee2e67b01f4cedf5452c2627e2aa17bc8(
    construct: IConstruct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__74d0fa652e39f975ef68ff4093ff1dfd8c4919e78344e1e557ea1960f095bcd0(
    obj: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2e646842a4e32a91459603425998d3a13b4b135ea05d39360f3d382a3486dc84(
    scope: Construct,
    id: builtins.str,
    *,
    parameters: typing.Optional[typing.Mapping[builtins.str, typing.Any]] = None,
    template_body: typing.Optional[builtins.str] = None,
    template_url: typing.Optional[builtins.str] = None,
    timeout: typing.Optional[jsii.Number] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__25b017370399ffba3a033fae3ebc112f4fdd2e6f79c636d64384b8f4a381bb0d(
    x: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__447d9f5b6c2854b6d918d5ae1853ac034d78e15222dae3f55f6c81b4e9386c88(
    attribute_name: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e8acfe38a22d7972aef78bf4967459c27003e8a578a5baffcc308affdbc9c9bc(
    name: builtins.str,
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a4adeb2f3dbe000bfb1c7ec7bed924206f4df34a2bc64ad2e4e1e1504e7a7c13(
    scope: Construct,
    id: builtins.str,
    *,
    expression: typing.Optional[IRosConditionExpression] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e2ef9d8bbd99a6ab400cec2a3268734727521372a8f3dd11a561cbbfceaa382a(
    _context: IResolveContext,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__320a90f621af7519a0584bb43b35d213f2c135a2982b42bad6edb3d7ff01f842(
    value: typing.Optional[IRosConditionExpression],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__339c8731b33058714cd4c46bb12532db7cb165d85986335505599f486cb0e2e1(
    scope: Construct,
    id: builtins.str,
    *,
    mapping: typing.Optional[typing.Mapping[builtins.str, typing.Mapping[builtins.str, typing.Any]]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__2700068fd9ad29f35ddcdc8992b2ffd67e016c0cc7343a6e921126ab1927e842(
    key1: builtins.str,
    key2: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__bf0fe656246b94ac6fc706854b81700474ad2a9a16e4cb7a23e1b55588f7ec37(
    key1: builtins.str,
    key2: builtins.str,
    value: typing.Any,
) -> None:
    """Type checking stubs"""
    pass
