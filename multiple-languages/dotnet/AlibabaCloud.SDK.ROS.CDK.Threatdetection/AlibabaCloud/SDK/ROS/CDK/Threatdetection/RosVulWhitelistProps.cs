using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `RosVulWhitelist`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-vulwhitelist
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-threatdetection.RosVulWhitelistProps")]
    public class RosVulWhitelistProps : AlibabaCloud.SDK.ROS.CDK.Threatdetection.IRosVulWhitelistProps
    {
        private object _targetInfo;

        /// <remarks>
        /// <strong>Property</strong>: targetInfo: The applicable scope of the whitelist. The value of this parameter is in the JSON format and contains the following fields:
        /// *   **type**: the type of the applicable scope. Valid values:
        /// *   **GroupId**: the ID of a server group.
        /// *   **Uuid**: the UUID of a server.
        /// *   **uuids**: the UUIDs of servers. This field is of the string type.
        /// *   **groupIds**: the IDs of server groups. This field is of the long type.
        /// >  If you leave this parameter empty, the applicable scope is all servers. If you set the **type** field to **GroupId**, you must also specify the **groupIds** field. If you set the **type** field to **Uuid**, you must also specify the **uuids** field.
        /// </remarks>
        [JsiiProperty(name: "targetInfo", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        public object TargetInfo
        {
            get => _targetInfo;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case System.Collections.Generic.IDictionary<string, object> cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, System.Collections.Generic.IDictionary<string, object>; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, System.Collections.Generic.IDictionary<string, object>; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _targetInfo = value;
            }
        }

        private object _whitelist;

        /// <remarks>
        /// <strong>Property</strong>: whitelist: The information about the vulnerability that you want to add to the whitelist. The value is a JSON string that contains the following fields:
        /// *   **Status**: the status of the vulnerability.
        /// *   **GmtLast**: the timestamp when the vulnerability was last detected. Unit: milliseconds.
        /// *   **LaterCount**: the number of vulnerabilities that have the medium priority.
        /// *   **AsapCount**: the number of vulnerabilities that have the high priority.
        /// *   **Name**: the name of the vulnerability.
        /// *   **Type**: the type of the vulnerability. Valid values:
        /// *   **cve**: Linux software vulnerability
        /// *   **sys**: Windows system vulnerability
        /// *   **cms**: Web-CMS vulnerability
        /// *   **app**: application vulnerability
        /// *   **emg**: urgent vulnerability
        /// *   **Related**: the Common Vulnerabilities and Exposures (CVE) ID of the vulnerability.
        /// *   **HandledCount**: the number of handled vulnerabilities.
        /// *   **AliasName**: the alias of the vulnerability.
        /// *   **RuleModifyTime**: the time when the vulnerability was last disclosed.
        /// *   **NntfCount**: the number of vulnerabilities that have the low priority.
        /// *   **TotalFixCount**: the total number of fixed vulnerabilities.
        /// *   **Tags**: the tag that is added to the vulnerability.
        /// >  You can call the [DescribeGroupedVul](~~DescribeGroupedVul~~) operation to query the information about the vulnerability that you want to add to the whitelist.
        /// </remarks>
        [JsiiProperty(name: "whitelist", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        public object Whitelist
        {
            get => _whitelist;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case System.Collections.Generic.IDictionary<string, object> cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, System.Collections.Generic.IDictionary<string, object>; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, System.Collections.Generic.IDictionary<string, object>; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _whitelist = value;
            }
        }

        private object? _reason;

        /// <remarks>
        /// <strong>Property</strong>: reason: The reason why you add the vulnerability to the whitelist.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "reason", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Reason
        {
            get => _reason;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _reason = value;
            }
        }
    }
}
