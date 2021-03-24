using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Drds
{
    /// <summary>A ROS resource type:  `ALIYUN::DRDS::DrdsInstance`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Drds.DrdsInstance), fullyQualifiedName: "@alicloud/ros-cdk-drds.DrdsInstance", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-drds.DrdsInstanceProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class DrdsInstance : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::DRDS::DrdsInstance`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public DrdsInstance(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Drds.IDrdsInstanceProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected DrdsInstance(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected DrdsInstance(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute DrdsInstanceId: instance id.</summary>
        [JsiiProperty(name: "attrDrdsInstanceId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrDrdsInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InternetEndpoint: Public endpoint.</summary>
        [JsiiProperty(name: "attrInternetEndpoint", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInternetEndpoint
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute IntranetEndpoint: VPC endpoint.</summary>
        [JsiiProperty(name: "attrIntranetEndpoint", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrIntranetEndpoint
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute OrderId: order number.</summary>
        [JsiiProperty(name: "attrOrderId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrOrderId
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
