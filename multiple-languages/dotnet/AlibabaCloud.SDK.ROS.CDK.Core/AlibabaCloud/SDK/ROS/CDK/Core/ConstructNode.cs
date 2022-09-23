using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Represents the construct node in the scope tree.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode), fullyQualifiedName: "@alicloud/ros-cdk-core.ConstructNode", parametersJson: "[{\"name\":\"host\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IConstruct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}}]")]
    public class ConstructNode : DeputyBase
    {
        public ConstructNode(AlibabaCloud.SDK.ROS.CDK.Core.Construct host, AlibabaCloud.SDK.ROS.CDK.Core.IConstruct scope, string id): base(_MakeDeputyProps(host, scope, id))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct host, AlibabaCloud.SDK.ROS.CDK.Core.IConstruct scope, string id)
        {
            return new DeputyProps(new object?[]{host, scope, id});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected ConstructNode(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected ConstructNode(DeputyProps props): base(props)
        {
        }

        /// <summary>(deprecated) Invokes "prepare" on all constructs (depth-first, post-order) in the tree under `node`.</summary>
        /// <param name="node">The root node.</param>
        /// <remarks>
        /// <strong>Stability</strong>: Deprecated
        /// </remarks>
        [JsiiMethod(name: "prepare", parametersJson: "[{\"docs\":{\"summary\":\"The root node.\"},\"name\":\"node\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}}]")]
        [System.Obsolete("Use `app.synth()` instead")]
        public static void Prepare(AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode node)
        {
            InvokeStaticVoidMethod(typeof(AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode), new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode)}, new object[]{node});
        }

        /// <summary>(deprecated) Synthesizes a CloudAssembly from a construct tree.</summary>
        /// <param name="node">The root of the construct tree.</param>
        /// <param name="options">Synthesis options.</param>
        /// <remarks>
        /// <strong>Stability</strong>: Deprecated
        /// </remarks>
        [JsiiMethod(name: "synth", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-cxapi.CloudAssembly\"}}", parametersJson: "[{\"docs\":{\"summary\":\"The root of the construct tree.\"},\"name\":\"node\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}},{\"docs\":{\"summary\":\"Synthesis options.\"},\"name\":\"options\",\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.SynthesisOptions\"}}]")]
        [System.Obsolete("Use `app.synth()` or `stage.synth()` instead")]
        public static AlibabaCloud.SDK.ROS.CDK.Cxapi.CloudAssembly Synth(AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode node, AlibabaCloud.SDK.ROS.CDK.Core.ISynthesisOptions? options = null)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Cxapi.CloudAssembly>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode), new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode), typeof(AlibabaCloud.SDK.ROS.CDK.Core.ISynthesisOptions)}, new object?[]{node, options})!;
        }

        /// <summary>Invokes "validate" on all constructs in the tree (depth-first, pre-order) and returns the list of all errors.</summary>
        /// <param name="node">The root node.</param>
        /// <remarks>
        /// An empty list indicates that there are no errors.
        /// </remarks>
        [JsiiMethod(name: "validate", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-core.ValidationError\"},\"kind\":\"array\"}}}", parametersJson: "[{\"docs\":{\"summary\":\"The root node.\"},\"name\":\"node\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}}]")]
        public static AlibabaCloud.SDK.ROS.CDK.Core.IValidationError[] Validate(AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode node)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Core.IValidationError[]>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode), new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode)}, new object[]{node})!;
        }

        /// <summary>Add an ordering dependency on another Construct.</summary>
        /// <remarks>
        /// All constructs in the dependency's scope will be deployed before any
        /// construct in this construct's scope.
        /// </remarks>
        [JsiiMethod(name: "addDependency", parametersJson: "[{\"name\":\"dependencies\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IDependable\"},\"variadic\":true}]")]
        public virtual void AddDependency(params AlibabaCloud.SDK.ROS.CDK.Core.IDependable[] dependencies)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.IDependable[])}, new object[]{dependencies});
        }

        /// <summary>Adds an { "error": &lt;message&gt; } metadata entry to this construct.</summary>
        /// <param name="message">The error message.</param>
        /// <remarks>
        /// The toolkit will fail synthesis when errors are reported.
        /// </remarks>
        [JsiiMethod(name: "addError", parametersJson: "[{\"docs\":{\"summary\":\"The error message.\"},\"name\":\"message\",\"type\":{\"primitive\":\"string\"}}]")]
        public virtual void AddError(string message)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(string)}, new object[]{message});
        }

        /// <summary>Adds a { "info": &lt;message&gt; } metadata entry to this construct.</summary>
        /// <param name="message">The info message.</param>
        /// <remarks>
        /// The toolkit will display the info message when apps are synthesized.
        /// </remarks>
        [JsiiMethod(name: "addInfo", parametersJson: "[{\"docs\":{\"summary\":\"The info message.\"},\"name\":\"message\",\"type\":{\"primitive\":\"string\"}}]")]
        public virtual void AddInfo(string message)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(string)}, new object[]{message});
        }

        /// <summary>Adds a metadata entry to this construct.</summary>
        /// <param name="type">a string denoting the type of metadata.</param>
        /// <param name="data">the value of the metadata (can be a Token).</param>
        /// <param name="fromFunction">a function under which to restrict the metadata entry's stack trace (defaults to this.addMetadata).</param>
        /// <remarks>
        /// Entries are arbitrary values and will also include a stack trace to allow tracing back to
        /// the code location for when the entry was added. It can be used, for example, to include source
        /// mapping in templates to improve diagnostics.
        /// </remarks>
        [JsiiMethod(name: "addMetadata", parametersJson: "[{\"docs\":{\"summary\":\"a string denoting the type of metadata.\"},\"name\":\"type\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"remarks\":\"If null/undefined, metadata will not be added.\",\"summary\":\"the value of the metadata (can be a Token).\"},\"name\":\"data\",\"type\":{\"primitive\":\"any\"}},{\"docs\":{\"summary\":\"a function under which to restrict the metadata entry's stack trace (defaults to this.addMetadata).\"},\"name\":\"fromFunction\",\"optional\":true,\"type\":{\"primitive\":\"any\"}}]")]
        public virtual void AddMetadata(string type, object data, object? fromFunction = null)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(string), typeof(object), typeof(object)}, new object?[]{type, data, fromFunction});
        }

        /// <summary>Adds a { "warning": &lt;message&gt; } metadata entry to this construct.</summary>
        /// <param name="message">The warning message.</param>
        /// <remarks>
        /// The toolkit will display the warning when an app is synthesized, or fail
        /// if run in --strict mode.
        /// </remarks>
        [JsiiMethod(name: "addWarning", parametersJson: "[{\"docs\":{\"summary\":\"The warning message.\"},\"name\":\"message\",\"type\":{\"primitive\":\"string\"}}]")]
        public virtual void AddWarning(string message)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(string)}, new object[]{message});
        }

        /// <summary>Return this construct and all of its children in the given order.</summary>
        [JsiiMethod(name: "findAll", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-core.IConstruct\"},\"kind\":\"array\"}}}", parametersJson: "[{\"name\":\"order\",\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.ConstructOrder\"}}]")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IConstruct[] FindAll(AlibabaCloud.SDK.ROS.CDK.Core.ConstructOrder? order = null)
        {
            return InvokeInstanceMethod<AlibabaCloud.SDK.ROS.CDK.Core.IConstruct[]>(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.ConstructOrder)}, new object?[]{order})!;
        }

        /// <summary>Return a direct child by id.</summary>
        /// <param name="id">Identifier of direct child.</param>
        /// <returns>Child with the given id.</returns>
        /// <remarks>
        /// Throws an error if the child is not found.
        /// </remarks>
        [JsiiMethod(name: "findChild", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IConstruct\"}}", parametersJson: "[{\"docs\":{\"summary\":\"Identifier of direct child.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}}]")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IConstruct FindChild(string id)
        {
            return InvokeInstanceMethod<AlibabaCloud.SDK.ROS.CDK.Core.IConstruct>(new System.Type[]{typeof(string)}, new object[]{id})!;
        }

        /// <summary>This can be used to set contextual values.</summary>
        /// <param name="key">The context key.</param>
        /// <param name="value">The context value.</param>
        /// <remarks>
        /// Context must be set before any children are added, since children may consult context info during construction.
        /// If the key already exists, it will be overridden.
        /// </remarks>
        [JsiiMethod(name: "setContext", parametersJson: "[{\"docs\":{\"summary\":\"The context key.\"},\"name\":\"key\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"The context value.\"},\"name\":\"value\",\"type\":{\"primitive\":\"any\"}}]")]
        public virtual void SetContext(string key, object @value)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(string), typeof(object)}, new object[]{key, @value});
        }

        /// <summary>Return a direct child by id, or undefined.</summary>
        /// <param name="id">Identifier of direct child.</param>
        /// <returns>the child if found, or undefined</returns>
        [JsiiMethod(name: "tryFindChild", returnsJson: "{\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IConstruct\"}}", parametersJson: "[{\"docs\":{\"summary\":\"Identifier of direct child.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}}]")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IConstruct? TryFindChild(string id)
        {
            return InvokeInstanceMethod<AlibabaCloud.SDK.ROS.CDK.Core.IConstruct?>(new System.Type[]{typeof(string)}, new object[]{id});
        }

        /// <summary>Retrieves a value from tree context.</summary>
        /// <param name="key">The context key.</param>
        /// <returns>The context value or `undefined` if there is no context value for thie key.</returns>
        /// <remarks>
        /// Context is usually initialized at the root, but can be overridden at any point in the tree.
        /// </remarks>
        [JsiiMethod(name: "tryGetContext", returnsJson: "{\"type\":{\"primitive\":\"any\"}}", parametersJson: "[{\"docs\":{\"summary\":\"The context key.\"},\"name\":\"key\",\"type\":{\"primitive\":\"string\"}}]")]
        public virtual object TryGetContext(string key)
        {
            return InvokeInstanceMethod<object>(new System.Type[]{typeof(string)}, new object[]{key})!;
        }

        /// <summary>(experimental) Remove the child with the given name, if present.</summary>
        /// <returns>Whether a child with the given name was deleted.</returns>
        /// <remarks>
        /// <strong>Stability</strong>: Experimental
        /// </remarks>
        [JsiiMethod(name: "tryRemoveChild", returnsJson: "{\"type\":{\"primitive\":\"boolean\"}}", parametersJson: "[{\"name\":\"childName\",\"type\":{\"primitive\":\"string\"}}]")]
        public virtual bool TryRemoveChild(string childName)
        {
            return InvokeInstanceMethod<bool>(new System.Type[]{typeof(string)}, new object[]{childName})!;
        }

        /// <summary>Separator used to delimit construct path components.</summary>
        [JsiiProperty(name: "PATH_SEP", typeJson: "{\"primitive\":\"string\"}")]
        public static string PATH_SEP
        {
            get;
        }
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode))!;

        /// <summary>All direct children of this construct.</summary>
        [JsiiProperty(name: "children", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-core.IConstruct\"},\"kind\":\"array\"}}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IConstruct[] Children
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IConstruct[]>()!;
        }

        /// <summary>Return all dependencies registered on this node or any of its children.</summary>
        [JsiiProperty(name: "dependencies", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-core.Dependency\"},\"kind\":\"array\"}}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IDependency[] Dependencies
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IDependency[]>()!;
        }

        /// <summary>The id of this construct within the current scope.</summary>
        /// <remarks>
        /// This is a a scope-unique id. To obtain an app-unique id for this construct, use <c>uniqueId</c>.
        /// </remarks>
        [JsiiProperty(name: "id", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string Id
        {
            get => GetInstanceProperty<string>()!;
        }

        /// <summary>Returns true if this construct or the scopes in which it is defined are locked.</summary>
        [JsiiProperty(name: "locked", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool Locked
        {
            get => GetInstanceProperty<bool>()!;
        }

        /// <summary>An immutable array of metadata objects associated with this construct.</summary>
        /// <remarks>
        /// This can be used, for example, to implement support for deprecation notices, source mapping, etc.
        /// </remarks>
        [JsiiProperty(name: "metadata", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-cxapi.MetadataEntry\"},\"kind\":\"array\"}}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Cxapi.IMetadataEntry[] Metadata
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cxapi.IMetadataEntry[]>()!;
        }

        /// <summary>The full, absolute path of this construct in the tree.</summary>
        /// <remarks>
        /// Components are separated by '/'.
        /// </remarks>
        [JsiiProperty(name: "path", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string Path
        {
            get => GetInstanceProperty<string>()!;
        }

        /// <returns>The root of the construct tree.</returns>
        [JsiiProperty(name: "root", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IConstruct\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IConstruct Root
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IConstruct>()!;
        }

        /// <summary>All parent scopes of this construct.</summary>
        /// <returns>a list of parent scopes. The last element in the list will always
        /// be the current construct and the first element will be the root of the
        /// tree.</returns>
        [JsiiProperty(name: "scopes", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-core.IConstruct\"},\"kind\":\"array\"}}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IConstruct[] Scopes
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IConstruct[]>()!;
        }

        /// <summary>A tree-global unique alphanumeric identifier for this construct.</summary>
        /// <remarks>
        /// Includes all components of the tree.
        /// </remarks>
        [JsiiProperty(name: "uniqueId", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string UniqueId
        {
            get => GetInstanceProperty<string>()!;
        }

        /// <summary>Returns the scope in which this construct is defined.</summary>
        /// <remarks>
        /// The value is <c>undefined</c> at the root of the construct scope tree.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "scope", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IConstruct\"}", isOptional: true)]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IConstruct? Scope
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IConstruct?>();
        }

        /// <summary>Returns the child construct that has the id `Default` or `Resource"`.</summary>
        /// <returns>a construct or undefined if there is no default child</returns>
        /// <remarks>
        /// This is usually the construct that provides the bulk of the underlying functionality.
        /// Useful for modifications of the underlying construct that are not available at the higher levels.
        /// Override the defaultChild property.
        ///
        /// This should only be used in the cases where the correct
        /// default child is not named 'Resource' or 'Default' as it
        /// should be.
        ///
        /// If you set this to undefined, the default behavior of finding
        /// the child named 'Resource' or 'Default' will be used.
        ///
        /// <strong>Throws</strong>: if there is more than one child
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "defaultChild", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IConstruct\"}", isOptional: true)]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IConstruct? DefaultChild
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IConstruct?>();
            set => SetInstanceProperty(value);
        }
    }
}
