using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cs.Datasource
{
    /// <summary>Properties for defining a `RosKubernetesClusters`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-kubernetesclusters
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cs.datasource.RosKubernetesClustersProps")]
    public class RosKubernetesClustersProps : AlibabaCloud.SDK.ROS.CDK.Cs.Datasource.IRosKubernetesClustersProps
    {
        private object? _clusterSpec;

        /// <remarks>
        /// <strong>Property</strong>: clusterSpec: The specification of the cluster. If you set the cluster type to ManagedKubernetes, you can use cluster specifications to distinguish clusters. Valid values:
        /// ack.pro.small: professional managed Kubernetes cluster
        /// ack.standard: standard managed Kubernetes cluster
        /// By default, this parameter is empty. This indicates that the parameter is not used to filter clusters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "clusterSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ClusterSpec
        {
            get => _clusterSpec;
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
                _clusterSpec = value;
            }
        }

        private object? _clusterType;

        /// <remarks>
        /// <strong>Property</strong>: clusterType: The type of the cluster. Valid values:
        /// Kubernetes: dedicated Kubernetes cluster
        /// ManagedKubernetes: managed Kubernetes cluster, serverless Kubernetes (ASK) cluster, or edge Kubernetes cluster
        /// Ask: ASK cluster
        /// ExternalKubernetes: registered external cluster
        /// When you query an ASK cluster, the value specified when the cluster was created is returned.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "clusterType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ClusterType
        {
            get => _clusterType;
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
                _clusterType = value;
            }
        }

        private object? _name;

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the cluster.The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). It cannot start with a hyphen (-).
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Name
        {
            get => _name;
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
                _name = value;
            }
        }

        private object? _profile;

        /// <remarks>
        /// <strong>Property</strong>: profile: The identifier of the cluster. If you set the cluster type to ManagedKubernetes, you can use cluster identifiers to distinguish clusters. Valid values:
        /// Default: managed Kubernetes cluster
        /// Serverless: ASK cluster
        /// Edge: edge Kubernetes cluster
        /// By default, this parameter is empty. This indicates that the parameter is not used to filter clusters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "profile", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Profile
        {
            get => _profile;
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
                _profile = value;
            }
        }
    }
}
