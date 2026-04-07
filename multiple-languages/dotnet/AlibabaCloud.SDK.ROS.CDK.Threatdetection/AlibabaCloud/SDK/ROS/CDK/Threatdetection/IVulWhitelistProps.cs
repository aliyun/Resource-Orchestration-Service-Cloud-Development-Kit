using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Properties for defining a `VulWhitelist`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-vulwhitelist
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IVulWhitelistProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.VulWhitelistProps")]
    public interface IVulWhitelistProps
    {
        /// <summary>Property targetInfo: The applicable scope of the whitelist.</summary>
        /// <remarks>
        /// The value of this parameter is in the JSON format and contains the following fields:
        ///
        /// <list type="bullet">
        /// <description><strong>type</strong>: the type of the applicable scope. Valid values:
        ///
        /// <list type="bullet">
        /// <description><strong>GroupId</strong>: the ID of a server group.</description>
        /// <description><strong>Uuid</strong>: the UUID of a server.</description>
        /// </list></description>
        /// <description><strong>uuids</strong>: the UUIDs of servers. This field is of the string type.</description>
        /// <description><strong>groupIds</strong>: the IDs of server groups. This field is of the long type.</description>
        /// </list>
        ///
        ///     If you leave this parameter empty, the applicable scope is all servers. If you set the <strong>type</strong> field to <strong>GroupId</strong>, you must also specify the <strong>groupIds</strong> field. If you set the <strong>type</strong> field to <strong>Uuid</strong>, you must also specify the <strong>uuids</strong> field.
        /// </remarks>
        [JsiiProperty(name: "targetInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        object TargetInfo
        {
            get;
        }

        /// <summary>Property whitelist: The information about the vulnerability that you want to add to the whitelist.</summary>
        /// <remarks>
        /// The value is a JSON string that contains the following fields:
        ///
        /// <list type="bullet">
        /// <description><strong>Status</strong>: the status of the vulnerability.</description>
        /// <description><strong>GmtLast</strong>: the timestamp when the vulnerability was last detected. Unit: milliseconds.</description>
        /// <description><strong>LaterCount</strong>: the number of vulnerabilities that have the medium priority.</description>
        /// <description><strong>AsapCount</strong>: the number of vulnerabilities that have the high priority.</description>
        /// <description><strong>Name</strong>: the name of the vulnerability.</description>
        /// <description><strong>Type</strong>: the type of the vulnerability. Valid values:
        ///
        /// <list type="bullet">
        /// <description><strong>cve</strong>: Linux software vulnerability</description>
        /// <description><strong>sys</strong>: Windows system vulnerability</description>
        /// <description><strong>cms</strong>: Web-CMS vulnerability</description>
        /// <description><strong>app</strong>: application vulnerability</description>
        /// <description><strong>emg</strong>: urgent vulnerability</description>
        /// </list></description>
        /// <description><strong>Related</strong>: the Common Vulnerabilities and Exposures (CVE) ID of the vulnerability.</description>
        /// <description><strong>HandledCount</strong>: the number of handled vulnerabilities.</description>
        /// <description><strong>AliasName</strong>: the alias of the vulnerability.</description>
        /// <description><strong>RuleModifyTime</strong>: the time when the vulnerability was last disclosed.</description>
        /// <description><strong>NntfCount</strong>: the number of vulnerabilities that have the low priority.</description>
        /// <description><strong>TotalFixCount</strong>: the total number of fixed vulnerabilities.</description>
        /// <description><strong>Tags</strong>: the tag that is added to the vulnerability.</description>
        /// </list>
        ///
        ///     You can call the <a href="~~DescribeGroupedVul~~">DescribeGroupedVul</a> operation to query the information about the vulnerability that you want to add to the whitelist.
        /// </remarks>
        [JsiiProperty(name: "whitelist", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        object Whitelist
        {
            get;
        }

        /// <summary>Property reason: The reason why you add the vulnerability to the whitelist.</summary>
        [JsiiProperty(name: "reason", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Reason
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `VulWhitelist`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-vulwhitelist
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IVulWhitelistProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.VulWhitelistProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IVulWhitelistProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property targetInfo: The applicable scope of the whitelist.</summary>
            /// <remarks>
            /// The value of this parameter is in the JSON format and contains the following fields:
            ///
            /// <list type="bullet">
            /// <description><strong>type</strong>: the type of the applicable scope. Valid values:
            ///
            /// <list type="bullet">
            /// <description><strong>GroupId</strong>: the ID of a server group.</description>
            /// <description><strong>Uuid</strong>: the UUID of a server.</description>
            /// </list></description>
            /// <description><strong>uuids</strong>: the UUIDs of servers. This field is of the string type.</description>
            /// <description><strong>groupIds</strong>: the IDs of server groups. This field is of the long type.</description>
            /// </list>
            ///
            ///     If you leave this parameter empty, the applicable scope is all servers. If you set the <strong>type</strong> field to <strong>GroupId</strong>, you must also specify the <strong>groupIds</strong> field. If you set the <strong>type</strong> field to <strong>Uuid</strong>, you must also specify the <strong>uuids</strong> field.
            /// </remarks>
            [JsiiProperty(name: "targetInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
            public object TargetInfo
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property whitelist: The information about the vulnerability that you want to add to the whitelist.</summary>
            /// <remarks>
            /// The value is a JSON string that contains the following fields:
            ///
            /// <list type="bullet">
            /// <description><strong>Status</strong>: the status of the vulnerability.</description>
            /// <description><strong>GmtLast</strong>: the timestamp when the vulnerability was last detected. Unit: milliseconds.</description>
            /// <description><strong>LaterCount</strong>: the number of vulnerabilities that have the medium priority.</description>
            /// <description><strong>AsapCount</strong>: the number of vulnerabilities that have the high priority.</description>
            /// <description><strong>Name</strong>: the name of the vulnerability.</description>
            /// <description><strong>Type</strong>: the type of the vulnerability. Valid values:
            ///
            /// <list type="bullet">
            /// <description><strong>cve</strong>: Linux software vulnerability</description>
            /// <description><strong>sys</strong>: Windows system vulnerability</description>
            /// <description><strong>cms</strong>: Web-CMS vulnerability</description>
            /// <description><strong>app</strong>: application vulnerability</description>
            /// <description><strong>emg</strong>: urgent vulnerability</description>
            /// </list></description>
            /// <description><strong>Related</strong>: the Common Vulnerabilities and Exposures (CVE) ID of the vulnerability.</description>
            /// <description><strong>HandledCount</strong>: the number of handled vulnerabilities.</description>
            /// <description><strong>AliasName</strong>: the alias of the vulnerability.</description>
            /// <description><strong>RuleModifyTime</strong>: the time when the vulnerability was last disclosed.</description>
            /// <description><strong>NntfCount</strong>: the number of vulnerabilities that have the low priority.</description>
            /// <description><strong>TotalFixCount</strong>: the total number of fixed vulnerabilities.</description>
            /// <description><strong>Tags</strong>: the tag that is added to the vulnerability.</description>
            /// </list>
            ///
            ///     You can call the <a href="~~DescribeGroupedVul~~">DescribeGroupedVul</a> operation to query the information about the vulnerability that you want to add to the whitelist.
            /// </remarks>
            [JsiiProperty(name: "whitelist", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
            public object Whitelist
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property reason: The reason why you add the vulnerability to the whitelist.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "reason", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Reason
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
