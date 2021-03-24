using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    /// <summary>A ROS resource type:  `ALIYUN::FC::Service`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Fc.Service), fullyQualifiedName: "@alicloud/ros-cdk-fc.Service", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-fc.ServiceProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Service : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::FC::Service`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public Service(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Fc.IServiceProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Service(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Service(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute InternetAccess: Whether enable Internet access.</summary>
        [JsiiProperty(name: "attrInternetAccess", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInternetAccess
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute LogProject: Log project of service.</summary>
        [JsiiProperty(name: "attrLogProject", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrLogProject
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Logstore: Log store of service.</summary>
        [JsiiProperty(name: "attrLogstore", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrLogstore
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Role: Role of service.</summary>
        [JsiiProperty(name: "attrRole", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrRole
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ServiceId: The service ID.</summary>
        [JsiiProperty(name: "attrServiceId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrServiceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ServiceName: The service name.</summary>
        [JsiiProperty(name: "attrServiceName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrServiceName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Tags: Tags of service.</summary>
        [JsiiProperty(name: "attrTags", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrTags
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VpcId: VPC ID.</summary>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrVpcId
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
