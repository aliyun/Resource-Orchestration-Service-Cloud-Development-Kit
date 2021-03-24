using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    /// <summary>A ROS resource type:  `ALIYUN::SLB::BackendServerAttachment`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Slb.BackendServerAttachment), fullyQualifiedName: "@alicloud/ros-cdk-slb.BackendServerAttachment", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-slb.BackendServerAttachmentProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class BackendServerAttachment : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::SLB::BackendServerAttachment`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public BackendServerAttachment(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Slb.IBackendServerAttachmentProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected BackendServerAttachment(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected BackendServerAttachment(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute BackendServers: The collection of attached backend server.</summary>
        [JsiiProperty(name: "attrBackendServers", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrBackendServers
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute LoadBalancerId: The id of load balancer.</summary>
        [JsiiProperty(name: "attrLoadBalancerId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrLoadBalancerId
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
