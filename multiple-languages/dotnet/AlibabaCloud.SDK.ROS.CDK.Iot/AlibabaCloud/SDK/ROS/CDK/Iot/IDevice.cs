using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Iot
{
    /// <summary>Represents a `Device`.</summary>
    [JsiiInterface(nativeType: typeof(IDevice), fullyQualifiedName: "@alicloud/ros-cdk-iot.IDevice")]
    public interface IDevice : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute DeviceName: Device name.</summary>
        [JsiiProperty(name: "attrDeviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDeviceName
        {
            get;
        }

        /// <summary>Attribute DeviceSecret: Device key.</summary>
        [JsiiProperty(name: "attrDeviceSecret", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDeviceSecret
        {
            get;
        }

        /// <summary>Attribute IotId: Things internet device ID issued for the device, as the unique identifier of the device.</summary>
        /// <remarks>
        /// Description Keep, do not leak.
        /// </remarks>
        [JsiiProperty(name: "attrIotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIotId
        {
            get;
        }

        /// <summary>Attribute IotInstanceId: IOT instance ID.</summary>
        [JsiiProperty(name: "attrIotInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIotInstanceId
        {
            get;
        }

        /// <summary>Attribute IpAddress: IP address.</summary>
        [JsiiProperty(name: "attrIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIpAddress
        {
            get;
        }

        /// <summary>Attribute NickName: Nick name.</summary>
        [JsiiProperty(name: "attrNickName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNickName
        {
            get;
        }

        /// <summary>Attribute NodeType: Node type.</summary>
        [JsiiProperty(name: "attrNodeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNodeType
        {
            get;
        }

        /// <summary>Attribute ProductKey: Product key.</summary>
        [JsiiProperty(name: "attrProductKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrProductKey
        {
            get;
        }

        /// <summary>Attribute ProductName: Product name.</summary>
        [JsiiProperty(name: "attrProductName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrProductName
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-iot.DeviceProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Iot.IDeviceProps Props
        {
            get;
        }

        /// <summary>Represents a `Device`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDevice), fullyQualifiedName: "@alicloud/ros-cdk-iot.IDevice")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Iot.IDevice
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute DeviceName: Device name.</summary>
            [JsiiProperty(name: "attrDeviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDeviceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DeviceSecret: Device key.</summary>
            [JsiiProperty(name: "attrDeviceSecret", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDeviceSecret
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IotId: Things internet device ID issued for the device, as the unique identifier of the device.</summary>
            /// <remarks>
            /// Description Keep, do not leak.
            /// </remarks>
            [JsiiProperty(name: "attrIotId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIotId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IotInstanceId: IOT instance ID.</summary>
            [JsiiProperty(name: "attrIotInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIotInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IpAddress: IP address.</summary>
            [JsiiProperty(name: "attrIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIpAddress
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NickName: Nick name.</summary>
            [JsiiProperty(name: "attrNickName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNickName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NodeType: Node type.</summary>
            [JsiiProperty(name: "attrNodeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNodeType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ProductKey: Product key.</summary>
            [JsiiProperty(name: "attrProductKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrProductKey
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ProductName: Product name.</summary>
            [JsiiProperty(name: "attrProductName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrProductName
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-iot.DeviceProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Iot.IDeviceProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Iot.IDeviceProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
