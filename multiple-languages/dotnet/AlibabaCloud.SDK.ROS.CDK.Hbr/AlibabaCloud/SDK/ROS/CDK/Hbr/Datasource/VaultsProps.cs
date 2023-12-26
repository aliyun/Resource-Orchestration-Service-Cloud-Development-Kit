using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hbr.Datasource
{
    /// <summary>Properties for defining a `Vaults`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-hbr-vaults
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-hbr.datasource.VaultsProps")]
    public class VaultsProps : AlibabaCloud.SDK.ROS.CDK.Hbr.Datasource.IVaultsProps
    {
        private object? _vaultId;

        /// <summary>Property vaultId: VaultId.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "vaultId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? VaultId
        {
            get => _vaultId;
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
                _vaultId = value;
            }
        }

        private object? _vaultType;

        /// <summary>Property vaultType: Vault type.</summary>
        /// <remarks>
        /// Value
        ///
        /// <list type="bullet">
        /// <description><strong>STANDARD</strong>, which indicates a common backup vault.</description>
        /// <description><strong>OTS_BACKUP</strong>, indicating OTS backup vault.</description>
        /// </list>
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vaultType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? VaultType
        {
            get => _vaultType;
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
                _vaultType = value;
            }
        }
    }
}
