using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mse.Datasource
{
    /// <summary>Properties for defining a `RosClusters`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mse-clusters
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-mse.datasource.RosClustersProps")]
    public class RosClustersProps : AlibabaCloud.SDK.ROS.CDK.Mse.Datasource.IRosClustersProps
    {
        private object? _clusterAliasName;

        /// <remarks>
        /// <strong>Property</strong>: clusterAliasName: The alias name of cluster.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "clusterAliasName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ClusterAliasName
        {
            get => _clusterAliasName;
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
                _clusterAliasName = value;
            }
        }
    }
}
