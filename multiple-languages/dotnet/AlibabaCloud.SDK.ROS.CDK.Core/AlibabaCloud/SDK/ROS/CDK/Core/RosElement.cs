using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>An element of a stack.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosElement), fullyQualifiedName: "@alicloud/ros-cdk-core.RosElement", parametersJson: "[{\"docs\":{\"summary\":\"The parent construct.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}}]")]
    public abstract class RosElement : AlibabaCloud.SDK.ROS.CDK.Core.Construct
    {
        /// <summary>Creates an entity and binds it to a tree.</summary>
        /// <param name="scope">The parent construct.</param>
        /// <remarks>
        /// Note that the root of the tree must be a Stack object (not just any Root).
        /// </remarks>
        protected RosElement(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id): base(new DeputyProps(new object?[]{scope, id}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosElement(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosElement(DeputyProps props): base(props)
        {
        }

        /// <summary>Returns `true` if a construct is a stack element (i.e. part of the synthesized template).</summary>
        /// <returns>The construct as a stack element or undefined if it is not a stack element.</returns>
        /// <remarks>
        /// Uses duck-typing instead of <c>instanceof</c> to allow stack elements from different
        /// versions of this library to be included in the same stack.
        /// </remarks>
        [JsiiMethod(name: "isRosElement", returnsJson: "{\"type\":{\"primitive\":\"boolean\"}}", parametersJson: "[{\"name\":\"x\",\"type\":{\"primitive\":\"any\"}}]")]
        public static bool IsRosElement(object x)
        {
            return InvokeStaticMethod<bool>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosElement), new System.Type[]{typeof(object)}, new object[]{x})!;
        }

        /// <summary>Overrides the auto-generated logical ID with a specific ID.</summary>
        /// <param name="newLogicalId">The new logical ID to use for this stack element.</param>
        [JsiiMethod(name: "overrideLogicalId", parametersJson: "[{\"docs\":{\"summary\":\"The new logical ID to use for this stack element.\"},\"name\":\"newLogicalId\",\"type\":{\"primitive\":\"string\"}}]")]
        public virtual void OverrideLogicalId(string newLogicalId)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(string)}, new object[]{newLogicalId});
        }

        /// <returns>the stack trace of the point where this Resource was created from, sourced
        /// from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
        /// node +internal+ entries filtered.</returns>
        [JsiiProperty(name: "creationStack", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}")]
        public virtual string[] CreationStack
        {
            get => GetInstanceProperty<string[]>()!;
        }

        /// <summary>The logical ID for this stack element.</summary>
        /// <returns>the logical ID as a stringified token. This value will only get
        /// resolved during synthesis.</returns>
        /// <remarks>
        /// The logical ID of the element
        /// is calculated from the path of the resource node in the construct tree.
        ///
        /// To override this value, use <c>overrideLogicalId(newLogicalId)</c>.
        /// </remarks>
        [JsiiProperty(name: "logicalId", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string LogicalId
        {
            get => GetInstanceProperty<string>()!;
        }

        /// <summary>The stack in which this element is defined.</summary>
        /// <remarks>
        /// RosElements must be defined within a stack scope (directly or indirectly).
        /// </remarks>
        [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
        }

        /// <summary>An element of a stack.</summary>
        [JsiiTypeProxy(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosElement), fullyQualifiedName: "@alicloud/ros-cdk-core.RosElement")]
        internal sealed class _Proxy : AlibabaCloud.SDK.ROS.CDK.Core.RosElement
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }
        }
    }
}
