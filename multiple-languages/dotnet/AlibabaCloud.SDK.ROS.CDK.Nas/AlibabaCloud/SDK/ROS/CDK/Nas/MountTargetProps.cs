using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nas
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::NAS::MountTarget`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-nas.MountTargetProps")]
    public class MountTargetProps : AlibabaCloud.SDK.ROS.CDK.Nas.IMountTargetProps
    {
        /// <summary>Property accessGroupName: Permission group name.</summary>
        /// <remarks>
        /// Default to DEFAULT_VPC_GROUP_NAME.
        /// </remarks>
        [JsiiProperty(name: "accessGroupName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string AccessGroupName
        {
            get;
            set;
        }

        /// <summary>Property fileSystemId: File system ID.</summary>
        [JsiiProperty(name: "fileSystemId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string FileSystemId
        {
            get;
            set;
        }

        /// <summary>Property networkType: Network type, including Vpc and Classic networks.</summary>
        [JsiiProperty(name: "networkType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string NetworkType
        {
            get;
            set;
        }

        /// <summary>Property status: Status, including Active and Inactive.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "status", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Status
        {
            get;
            set;
        }

        /// <summary>Property vpcId: VPC network ID.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? VpcId
        {
            get;
            set;
        }

        /// <summary>Property vSwitchId: VSwitch ID.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? VSwitchId
        {
            get;
            set;
        }
    }
}
