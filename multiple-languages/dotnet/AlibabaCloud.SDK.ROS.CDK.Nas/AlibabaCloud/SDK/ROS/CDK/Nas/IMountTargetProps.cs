using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nas
{
    /// <summary>Properties for defining a `ALIYUN::NAS::MountTarget`.</summary>
    [JsiiInterface(nativeType: typeof(IMountTargetProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.MountTargetProps")]
    public interface IMountTargetProps
    {
        /// <summary>Property accessGroupName: Permission group name.</summary>
        /// <remarks>
        /// Default to DEFAULT_VPC_GROUP_NAME.
        /// </remarks>
        [JsiiProperty(name: "accessGroupName", typeJson: "{\"primitive\":\"string\"}")]
        string AccessGroupName
        {
            get;
        }

        /// <summary>Property fileSystemId: File system ID.</summary>
        [JsiiProperty(name: "fileSystemId", typeJson: "{\"primitive\":\"string\"}")]
        string FileSystemId
        {
            get;
        }

        /// <summary>Property networkType: Network type, including Vpc and Classic networks.</summary>
        [JsiiProperty(name: "networkType", typeJson: "{\"primitive\":\"string\"}")]
        string NetworkType
        {
            get;
        }

        /// <summary>Property status: Status, including Active and Inactive.</summary>
        [JsiiProperty(name: "status", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Status
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcId: VPC network ID.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vSwitchId: VSwitch ID.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? VSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::NAS::MountTarget`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IMountTargetProps), fullyQualifiedName: "@alicloud/ros-cdk-nas.MountTargetProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Nas.IMountTargetProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property accessGroupName: Permission group name.</summary>
            /// <remarks>
            /// Default to DEFAULT_VPC_GROUP_NAME.
            /// </remarks>
            [JsiiProperty(name: "accessGroupName", typeJson: "{\"primitive\":\"string\"}")]
            public string AccessGroupName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property fileSystemId: File system ID.</summary>
            [JsiiProperty(name: "fileSystemId", typeJson: "{\"primitive\":\"string\"}")]
            public string FileSystemId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property networkType: Network type, including Vpc and Classic networks.</summary>
            [JsiiProperty(name: "networkType", typeJson: "{\"primitive\":\"string\"}")]
            public string NetworkType
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property status: Status, including Active and Inactive.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "status", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Status
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property vpcId: VPC network ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? VpcId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property vSwitchId: VSwitch ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? VSwitchId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
