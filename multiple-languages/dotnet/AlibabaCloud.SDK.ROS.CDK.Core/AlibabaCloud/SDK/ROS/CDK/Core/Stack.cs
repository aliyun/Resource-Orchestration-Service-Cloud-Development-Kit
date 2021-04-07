using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>A root construct which represents a single ROS stack.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.Stack), fullyQualifiedName: "@alicloud/ros-cdk-core.Stack", parametersJson: "[{\"docs\":{\"summary\":\"Parent of this stack, usually a Program instance.\"},\"name\":\"scope\",\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"remarks\":\"If `stackName` is not explicitly\ndefined, this id (and any parent IDs) will be used to determine the\nphysical ID of the stack.\",\"summary\":\"The construct ID of this stack.\"},\"name\":\"id\",\"optional\":true,\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"Stack properties.\"},\"name\":\"props\",\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.StackProps\"}}]")]
    public class Stack : AlibabaCloud.SDK.ROS.CDK.Core.Construct, AlibabaCloud.SDK.ROS.CDK.Core.ITaggable
    {
        /// <summary>Creates a new stack.</summary>
        /// <param name="scope">Parent of this stack, usually a Program instance.</param>
        /// <param name="id">The construct ID of this stack.</param>
        /// <param name="props">Stack properties.</param>
        public Stack(AlibabaCloud.SDK.ROS.CDK.Core.Construct? scope = null, string? id = null, AlibabaCloud.SDK.ROS.CDK.Core.IStackProps? props = null): base(new DeputyProps(new object?[]{scope, id, props}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Stack(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Stack(DeputyProps props): base(props)
        {
        }

        /// <summary>Return whether the given object is a Stack.</summary>
        /// <remarks>
        /// We do attribute detection since we can't reliably use 'instanceof'.
        /// </remarks>
        [JsiiMethod(name: "isStack", returnsJson: "{\"type\":{\"primitive\":\"boolean\"}}", parametersJson: "[{\"name\":\"x\",\"type\":{\"primitive\":\"any\"}}]")]
        public static bool IsStack(object x)
        {
            return InvokeStaticMethod<bool>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Stack), new System.Type[]{typeof(object)}, new object[]{x})!;
        }

        /// <summary>Looks up the first stack scope in which `construct` is defined.</summary>
        /// <param name="construct">The construct to start the search from.</param>
        /// <remarks>
        /// Fails if there is no stack up the tree.
        /// </remarks>
        [JsiiMethod(name: "of", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}}", parametersJson: "[{\"docs\":{\"summary\":\"The construct to start the search from.\"},\"name\":\"construct\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IConstruct\"}}]")]
        public static AlibabaCloud.SDK.ROS.CDK.Core.Stack Of(AlibabaCloud.SDK.ROS.CDK.Core.IConstruct construct)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Core.Stack>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.Stack), new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.IConstruct)}, new object[]{construct})!;
        }

        /// <summary>Add a dependency between this stack and another stack.</summary>
        /// <remarks>
        /// This can be used to define dependencies between any two stacks within an
        /// app, and also supports nested stacks.
        /// </remarks>
        [JsiiMethod(name: "addDependency", parametersJson: "[{\"name\":\"target\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}},{\"name\":\"reason\",\"optional\":true,\"type\":{\"primitive\":\"string\"}}]")]
        public virtual void AddDependency(AlibabaCloud.SDK.ROS.CDK.Core.Stack target, string? reason = null)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.Stack), typeof(string)}, new object?[]{target, reason});
        }

        /// <summary>Returns the naming scheme used to allocate logical IDs.</summary>
        /// <param name="rosElement">The element for which the logical ID is allocated.</param>
        /// <remarks>
        /// By default, uses
        /// the <c>HashedAddressingScheme</c> but this method can be overridden to customize
        /// this behavior.
        ///
        /// In order to make sure logical IDs are unique and stable, we hash the resource
        /// construct tree path (i.e. toplevel/secondlevel/.../myresource) and add it as
        /// a suffix to the path components joined without a separator (ROS
        /// IDs only allow alphanumeric characters).
        ///
        /// The result will be:
        ///
        /// &lt;path.join('')&gt;&lt;md5(path.join('/')&gt;
        /// "human"      "hash"
        ///
        /// If the "human" part of the ID exceeds 240 characters, we simply trim it so
        /// the total ID doesn't exceed 255 character limit.
        ///
        /// We only take 8 characters from the md5 hash (0.000005 chance of collision).
        ///
        /// Special cases:
        ///
        /// <list type="bullet">
        /// <description>If the path only contains a single component (i.e. it's a top-level
        /// resource), we won't add the hash to it. The hash is not needed for
        /// disamiguation and also, it allows for a more straightforward migration an
        /// existing ROS template to a CDK stack without logical ID changes
        /// (or renames).</description>
        /// <description>For aesthetic reasons, if the last components of the path are the same
        /// (i.e. <c>L1/L2/Pipeline/Pipeline</c>), they will be de-duplicated to make the
        /// resulting human portion of the ID more pleasing: <c>L1L2Pipeline&lt;HASH&gt;</c>
        /// instead of <c>L1L2PipelinePipeline&lt;HASH&gt;</c></description>
        /// <description>If a component is named "Default" it will be omitted from the path. This
        /// allows refactoring higher level abstractions around constructs without affecting
        /// the IDs of already deployed resources.</description>
        /// <description>If a component is named "Resource" it will be omitted from the user-visible
        /// path, but included in the hash. This reduces visual noise in the human readable
        /// part of the identifier.</description>
        /// </list>
        /// </remarks>
        [JsiiMethod(name: "allocateLogicalId", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"docs\":{\"summary\":\"The element for which the logical ID is allocated.\"},\"name\":\"rosElement\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.RosElement\"}}]")]
        protected virtual string AllocateLogicalId(AlibabaCloud.SDK.ROS.CDK.Core.RosElement rosElement)
        {
            return InvokeInstanceMethod<string>(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosElement)}, new object[]{rosElement})!;
        }

        /// <summary>Allocates a stack-unique logical identity for a specific resource.</summary>
        /// <param name="element">The ROS element for which a logical identity is needed.</param>
        /// <remarks>
        /// This method is called when a <c>RosElement</c> is created and used to render the
        /// initial logical identity of resources. Logical ID renames are applied at
        /// this stage.
        ///
        /// This method uses the protected method <c>allocateLogicalId</c> to render the
        /// logical ID for an element. To modify the naming scheme, extend the <c>Stack</c>
        /// class and override this method.
        /// </remarks>
        [JsiiMethod(name: "getLogicalId", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"docs\":{\"summary\":\"The ROS element for which a logical identity is needed.\"},\"name\":\"element\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.RosElement\"}}]")]
        public virtual string GetLogicalId(AlibabaCloud.SDK.ROS.CDK.Core.RosElement element)
        {
            return InvokeInstanceMethod<string>(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosElement)}, new object[]{element})!;
        }

        /// <summary>(deprecated) Deprecated.</summary>
        /// <returns>reference itself without any change</returns>
        /// <remarks>
        /// <strong>Stability</strong>: Deprecated
        /// </remarks>
        [JsiiMethod(name: "prepareCrossReference", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}}", parametersJson: "[{\"name\":\"_sourceStack\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}},{\"name\":\"reference\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Reference\"}}]")]
        [System.Obsolete("cross reference handling has been moved to `App.prepare()`.")]
        protected virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable PrepareCrossReference(AlibabaCloud.SDK.ROS.CDK.Core.Stack sourceStack, AlibabaCloud.SDK.ROS.CDK.Core.Reference reference)
        {
            return InvokeInstanceMethod<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.Stack), typeof(AlibabaCloud.SDK.ROS.CDK.Core.Reference)}, new object[]{sourceStack, reference})!;
        }

        /// <summary>Rename a generated logical identities.</summary>
        /// <remarks>
        /// To modify the naming scheme strategy, extend the <c>Stack</c> class and
        /// override the <c>allocateLogicalId</c> method.
        /// </remarks>
        [JsiiMethod(name: "renameLogicalId", parametersJson: "[{\"name\":\"oldId\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"newId\",\"type\":{\"primitive\":\"string\"}}]")]
        public virtual void RenameLogicalId(string oldId, string newId)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(string), typeof(string)}, new object[]{oldId, newId});
        }

        /// <summary>Resolve a tokenized value in the context of the current stack.</summary>
        [JsiiMethod(name: "resolve", returnsJson: "{\"type\":{\"primitive\":\"any\"}}", parametersJson: "[{\"name\":\"obj\",\"type\":{\"primitive\":\"any\"}}]")]
        public virtual object Resolve(object obj)
        {
            return InvokeInstanceMethod<object>(new System.Type[]{typeof(object)}, new object[]{obj})!;
        }

        /// <summary>Allows this construct to emit artifacts into the cloud assembly during synthesis.</summary>
        /// <remarks>
        /// This method is usually implemented by framework-level constructs such as <c>Stack</c> and <c>Asset</c>
        /// as they participate in synthesizing the cloud assembly.
        /// </remarks>
        [JsiiMethod(name: "synthesize", parametersJson: "[{\"name\":\"session\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.ISynthesisSession\"}}]", isOverride: true)]
        protected override void Synthesize(AlibabaCloud.SDK.ROS.CDK.Core.ISynthesisSession session)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.ISynthesisSession)}, new object[]{session});
        }

        /// <summary>Convert an object, potentially containing tokens, to a JSON string.</summary>
        [JsiiMethod(name: "toJsonString", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"name\":\"obj\",\"type\":{\"primitive\":\"any\"}},{\"name\":\"space\",\"optional\":true,\"type\":{\"primitive\":\"number\"}}]")]
        public virtual string ToJsonString(object obj, double? space = null)
        {
            return InvokeInstanceMethod<string>(new System.Type[]{typeof(object), typeof(double)}, new object?[]{obj, space})!;
        }

        /// <summary>The ID of the cloud assembly artifact for this stack.</summary>
        [JsiiProperty(name: "artifactId", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string ArtifactId
        {
            get => GetInstanceProperty<string>()!;
        }

        /// <summary>Return the stacks this stack depends on.</summary>
        [JsiiProperty(name: "dependencies", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"},\"kind\":\"array\"}}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.Stack[] Dependencies
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack[]>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
        }

        /// <summary>Indicates if this is a nested stack, in which case `parentStack` will include a reference to it's parent.</summary>
        [JsiiProperty(name: "nested", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool Nested
        {
            get => GetInstanceProperty<bool>()!;
        }

        /// <summary>The ID of the stack.</summary>
        [JsiiProperty(name: "stackId", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string StackId
        {
            get => GetInstanceProperty<string>()!;
        }

        /// <summary>The concrete ROS physical stack name.</summary>
        /// <remarks>
        /// This is either the name defined explicitly in the <c>stackName</c> prop or
        /// allocated based on the stack's location in the construct tree. Stacks that
        /// are directly defined under the app use their construct <c>id</c> as their stack
        /// name. Stacks that are defined deeper within the tree will use a hashed naming
        /// scheme based on the construct path to ensure uniqueness.
        /// </remarks>
        [JsiiProperty(name: "stackName", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string StackName
        {
            get => GetInstanceProperty<string>()!;
        }

        /// <summary>(experimental) Synthesis method for this stack.</summary>
        /// <remarks>
        /// <strong>Stability</strong>: Experimental
        /// </remarks>
        [JsiiProperty(name: "synthesizer", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IStackSynthesizer\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IStackSynthesizer Synthesizer
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IStackSynthesizer>()!;
        }

        /// <summary>Tags to be applied to the stack.</summary>
        [JsiiProperty(name: "tags", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.TagManager\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.TagManager Tags
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.TagManager>()!;
        }

        /// <summary>The name of the ROS template file emitted to the output directory during synthesis.</summary>
        /// <example>
        /// <code>// Example automatically generated without compilation. See https://github.com/aws/jsii/issues/826
        /// MyStack.Template.Json;</code>
        /// </example>
        [JsiiProperty(name: "templateFile", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string TemplateFile
        {
            get => GetInstanceProperty<string>()!;
        }

        /// <summary>Options for ROS template (like version, description).</summary>
        [JsiiProperty(name: "templateOptions", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ITemplateOptions\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.ITemplateOptions TemplateOptions
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ITemplateOptions>()!;
        }

        /// <summary>If this is a nested stack, returns it's parent stack.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "nestedStackParent", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}", isOptional: true)]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.Stack? NestedStackParent
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack?>();
        }

        /// <summary>(experimental) If this is a nested stack, this represents its `ALIYUN::ROS::Stack` resource.</summary>
        /// <remarks>
        /// <c>undefined</c> for top-level (non-nested) stacks.
        ///
        /// <strong>Stability</strong>: Experimental
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "nestedStackResource", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.RosResource\"}", isOptional: true)]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.RosResource? NestedStackResource
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.RosResource?>();
        }

        /// <summary>(deprecated) Returns the parent of a nested stack.</summary>
        /// <remarks>
        /// <strong>Stability</strong>: Deprecated
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "parentStack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}", isOptional: true)]
        [System.Obsolete("use `nestedStackParent`")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.Stack? ParentStack
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack?>();
        }
    }
}
