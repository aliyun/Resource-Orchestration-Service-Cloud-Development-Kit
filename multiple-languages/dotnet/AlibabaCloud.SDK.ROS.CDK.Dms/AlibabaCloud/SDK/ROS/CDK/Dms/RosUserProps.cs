using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dms
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::DMS::User`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-dms.RosUserProps")]
    public class RosUserProps : AlibabaCloud.SDK.ROS.CDK.Dms.IRosUserProps
    {
        /// <remarks>
        /// <strong>Property</strong>: uid: UserAliYunUid
        /// </remarks>
        [JsiiProperty(name: "uid", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Uid
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: mobile: UserMobile
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "mobile", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Mobile
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: roleNames: UserRole
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "roleNames", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public string[]? RoleNames
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: status: UserStatus
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "status", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Status
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: tid:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tid", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Tid
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: userName: UserNickName
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "userName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? UserName
        {
            get;
            set;
        }
    }
}
