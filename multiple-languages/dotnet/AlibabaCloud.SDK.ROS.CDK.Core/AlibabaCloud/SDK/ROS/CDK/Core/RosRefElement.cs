using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Base class for referenceable template constructs which are not Resources&#xD; &#xD; These constructs are things like Conditions and Parameters, can be&#xD; referenced by taking the `.ref` attribute.&#xD; &#xD; Resource constructs do not inherit from RosRefElement because they have their&#xD; own, more specific types returned from the .ref attribute. Also, some&#xD; resources aren't referenceable at all (such as BucketPolicies or GatewayAttachments).</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosRefElement), fullyQualifiedName: "@alicloud/ros-cdk-core.RosRefElement", parametersJson: "[{\"docs\":{\"summary\":\"The parent construct.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}}]")]
    public abstract class RosRefElement : AlibabaCloud.SDK.ROS.CDK.Core.RosElement
    {
        /// <summary>Creates an entity and binds it to a tree.</summary>
        /// <param name="scope">The parent construct.</param>
        /// <remarks>
        /// Note that the root of the tree must be a Stack object (not just any Root).
        /// </remarks>
        protected RosRefElement(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id): base(new DeputyProps(new object?[]{scope, id}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosRefElement(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosRefElement(DeputyProps props): base(props)
        {
        }

        /// <summary>Return a string that will be resolved to a RosTemplate `{ Ref }` for this element.</summary>
        /// <remarks>
        /// If, by any chance, the intrinsic reference of a resource is not a string, you could
        /// coerce it to an IResolvable through <c>Lazy.any({ produce: resource.ref })</c>.
        /// </remarks>
        [JsiiProperty(name: "ref", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string Ref
        {
            get => GetInstanceProperty<string>()!;
        }

        /// <summary>Base class for referenceable template constructs which are not Resources&#xD; &#xD; These constructs are things like Conditions and Parameters, can be&#xD; referenced by taking the `.ref` attribute.&#xD; &#xD; Resource constructs do not inherit from RosRefElement because they have their&#xD; own, more specific types returned from the .ref attribute. Also, some&#xD; resources aren't referenceable at all (such as BucketPolicies or GatewayAttachments).</summary>
        [JsiiTypeProxy(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosRefElement), fullyQualifiedName: "@alicloud/ros-cdk-core.RosRefElement")]
        new internal sealed class _Proxy : AlibabaCloud.SDK.ROS.CDK.Core.RosRefElement
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }
        }
    }
}
