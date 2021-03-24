using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Iot
{
    /// <summary>A ROS resource type:  `ALIYUN::IOT::Device`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Iot.Device), fullyQualifiedName: "@alicloud/ros-cdk-iot.Device", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-iot.DeviceProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Device : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::IOT::Device`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public Device(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Iot.IDeviceProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Device(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Device(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute DeviceName: Device name.</summary>
        [JsiiProperty(name: "attrDeviceName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrDeviceName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DeviceSecret: Device key.</summary>
        [JsiiProperty(name: "attrDeviceSecret", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrDeviceSecret
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute IotId: Things internet device ID issued for the device, as the unique identifier of the device.</summary>
        /// <remarks>
        /// Description Keep, do not leak.
        /// </remarks>
        [JsiiProperty(name: "attrIotId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrIotId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute IotInstanceId: IOT instance ID.</summary>
        [JsiiProperty(name: "attrIotInstanceId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrIotInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute IpAddress: IP address.</summary>
        [JsiiProperty(name: "attrIpAddress", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrIpAddress
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute NickName: Nick name.</summary>
        [JsiiProperty(name: "attrNickName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrNickName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute NodeType: Node type.</summary>
        [JsiiProperty(name: "attrNodeType", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrNodeType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ProductKey: Product key.</summary>
        [JsiiProperty(name: "attrProductKey", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrProductKey
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ProductName: Product name.</summary>
        [JsiiProperty(name: "attrProductName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrProductName
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
