using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudfw.Datasource
{
    /// <summary>Properties for defining a `AddressBooks`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudfw-addressbooks
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cloudfw.datasource.AddressBooksProps")]
    public class AddressBooksProps : AlibabaCloud.SDK.ROS.CDK.Cloudfw.Datasource.IAddressBooksProps
    {
        private object? _groupType;

        /// <summary>Property groupType: Address Book, it can be set to include: - **ip**: an IP address book - **domain**: domain name address book - **port**: port Address Book - **tag**:ECS tag address book.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "groupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? GroupType
        {
            get => _groupType;
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
                _groupType = value;
            }
        }

        private object? _lang;

        /// <summary>Property lang: The language type of the received message.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description><strong>zh</strong> (default): Chinese.</description>
        /// <description><strong>en</strong>: English.</description>
        /// </list>
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "lang", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Lang
        {
            get => _lang;
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
                _lang = value;
            }
        }
    }
}
