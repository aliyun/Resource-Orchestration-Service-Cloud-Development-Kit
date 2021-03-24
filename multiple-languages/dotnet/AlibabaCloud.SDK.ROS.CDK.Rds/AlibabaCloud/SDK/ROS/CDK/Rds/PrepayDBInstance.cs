using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds
{
    /// <summary>A ROS resource type:  `ALIYUN::RDS::PrepayDBInstance`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Rds.PrepayDBInstance), fullyQualifiedName: "@alicloud/ros-cdk-rds.PrepayDBInstance", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-rds.PrepayDBInstanceProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class PrepayDBInstance : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::RDS::PrepayDBInstance`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public PrepayDBInstance(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Rds.IPrepayDBInstanceProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected PrepayDBInstance(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected PrepayDBInstance(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute DBInstanceId: The instance id of created database instance.</summary>
        [JsiiProperty(name: "attrDbInstanceId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrDbInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InnerConnectionString: DB instance connection url by Intranet.</summary>
        [JsiiProperty(name: "attrInnerConnectionString", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInnerConnectionString
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InnerIPAddress: IP Address for created DB instance of Intranet.</summary>
        [JsiiProperty(name: "attrInnerIpAddress", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInnerIpAddress
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InnerPort: Intranet port of created DB instance.</summary>
        [JsiiProperty(name: "attrInnerPort", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInnerPort
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute OrderId: The order id list of created instance.</summary>
        [JsiiProperty(name: "attrOrderId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrOrderId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PublicConnectionString: DB instance connection url by Internet.</summary>
        [JsiiProperty(name: "attrPublicConnectionString", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrPublicConnectionString
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PublicIPAddress: IP Address for created DB instance of Internet.</summary>
        [JsiiProperty(name: "attrPublicIpAddress", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrPublicIpAddress
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PublicPort: Internet port of created DB instance.</summary>
        [JsiiProperty(name: "attrPublicPort", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrPublicPort
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
