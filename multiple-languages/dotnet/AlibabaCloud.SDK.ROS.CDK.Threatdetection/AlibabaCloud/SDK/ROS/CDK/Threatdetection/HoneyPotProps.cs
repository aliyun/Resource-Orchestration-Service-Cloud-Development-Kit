using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `HoneyPot`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypot
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-threatdetection.HoneyPotProps")]
    public class HoneyPotProps : AlibabaCloud.SDK.ROS.CDK.Threatdetection.IHoneyPotProps
    {
        private object _honeypotImageId;

        /// <summary>Property honeypotImageId: The ID of the honeypot image.</summary>
        /// <remarks>
        ///     You can call the <a href="~~ListAvailableHoneypot~~">ListAvailableHoneypot</a> operation to query the IDs of images from the <strong>HoneypotImageId</strong> response parameter.
        /// </remarks>
        [JsiiProperty(name: "honeypotImageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object HoneypotImageId
        {
            get => _honeypotImageId;
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
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _honeypotImageId = value;
            }
        }

        private object _honeypotImageName;

        /// <summary>Property honeypotImageName: The name of the honeypot image.</summary>
        /// <remarks>
        ///     You can call the <a href="~~ListAvailableHoneypot~~">ListAvailableHoneypot</a> operation to query the names of images from the <strong>HoneypotImageName</strong> response parameter.
        /// </remarks>
        [JsiiProperty(name: "honeypotImageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object HoneypotImageName
        {
            get => _honeypotImageName;
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
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _honeypotImageName = value;
            }
        }

        private object _honeypotName;

        /// <summary>Property honeypotName: The custom name of the honeypot.</summary>
        [JsiiProperty(name: "honeypotName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object HoneypotName
        {
            get => _honeypotName;
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
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _honeypotName = value;
            }
        }

        private object _nodeId;

        /// <summary>Property nodeId: The ID of the management node.</summary>
        /// <remarks>
        ///     You can call the <a href="~~ListHoneypotNode~~">ListHoneypotNode</a> operation to query the IDs of management nodes.
        /// </remarks>
        [JsiiProperty(name: "nodeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object NodeId
        {
            get => _nodeId;
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
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _nodeId = value;
            }
        }

        private object? _meta;

        /// <summary>Property meta: Honeypot custom configuration.</summary>
        /// <remarks>
        /// JSON format. Contains the following fields:
        ///
        /// <list type="bullet">
        /// <description><strong>trojan_git</strong>:Git counterplan. Value:</description>
        /// <description><strong>zip</strong>:Git source package</description>
        /// <description><strong>web</strong>:.git directory leak</description>
        /// <description><strong>close</strong>: close</description>
        /// <description><strong>trojan_git_addr</strong>:Git anti-control connection address</description>
        /// <description><strong>Trojan_git.zip</strong>:Git anti-Trojan package</description>
        /// <description><strong>burp</strong>:Burp counter. Value:</description>
        /// <description><strong>open</strong>: On</description>
        /// <description><strong>close</strong>: close</description>
        /// <description><strong>portrait_option</strong>: traceability configuration. Value:</description>
        /// <description><strong>false</strong>: Disabled</description>
        /// <description><strong>true</strong>: Enable.</description>
        /// </list>
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "meta", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        public object? Meta
        {
            get => _meta;
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
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, System.Collections.Generic.IDictionary<string, object>; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _meta = value;
            }
        }
    }
}
