using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Nas
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::NAS::AccessRule`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-nas.RosAccessRuleProps")]
    public class RosAccessRuleProps : AlibabaCloud.SDK.ROS.CDK.Nas.IRosAccessRuleProps
    {
        /// <remarks>
        /// <strong>Property</strong>: accessGroupName: Permission group name
        /// </remarks>
        [JsiiProperty(name: "accessGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object AccessGroupName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceCidrIp: Address or address segment
        /// </remarks>
        [JsiiProperty(name: "sourceCidrIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object SourceCidrIp
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: priority: Priority level. Range: 1-100. Default value: 1
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Priority
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: rwAccessType: Read-write permission type: RDWR (default), RDONLY
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "rwAccessType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? RwAccessType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: userAccessType: User permission type: no_squash (default), root_squash, all_squash
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "userAccessType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? UserAccessType
        {
            get;
            set;
        }
    }
}
