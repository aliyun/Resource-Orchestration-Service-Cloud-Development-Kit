using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CS::AnyCluster`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cs.AnyClusterProps")]
    public class AnyClusterProps : AlibabaCloud.SDK.ROS.CDK.Cs.IAnyClusterProps
    {
        private object _clusterConfig;

        /// <summary>Property clusterConfig: Cluster config.</summary>
        [JsiiProperty(name: "clusterConfig", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ClusterConfig
        {
            get => _clusterConfig;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case System.Collections.Generic.IDictionary<string, object> cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: System.Collections.Generic.IDictionary<string, object>, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: System.Collections.Generic.IDictionary<string, object>, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _clusterConfig = value;
            }
        }
    }
}
