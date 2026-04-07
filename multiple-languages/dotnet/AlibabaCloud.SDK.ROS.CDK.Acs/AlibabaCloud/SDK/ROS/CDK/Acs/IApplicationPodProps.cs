using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Acs
{
    /// <summary>Properties for defining a `ApplicationPod`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acs-applicationpod
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IApplicationPodProps), fullyQualifiedName: "@alicloud/ros-cdk-acs.ApplicationPodProps")]
    public interface IApplicationPodProps
    {
        /// <summary>Property computeClass: Compute class of the application pod.</summary>
        [JsiiProperty(name: "computeClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ComputeClass
        {
            get;
        }

        /// <summary>Property computeQos: Compute QoS of the application pod.</summary>
        [JsiiProperty(name: "computeQos", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ComputeQos
        {
            get;
        }

        /// <summary>Property cpuCoreNumber: CPU core number required by the container.</summary>
        [JsiiProperty(name: "cpuCoreNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CpuCoreNumber
        {
            get;
        }

        /// <summary>Property image: Container image for the application pod.</summary>
        [JsiiProperty(name: "image", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Image
        {
            get;
        }

        /// <summary>Property kind: Kind of the application pod (Job, CronJob, Deployment, StatefulSet).</summary>
        [JsiiProperty(name: "kind", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Kind
        {
            get;
        }

        /// <summary>Property memory: Memory size (in GB) required by the container.</summary>
        [JsiiProperty(name: "memory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Memory
        {
            get;
        }

        /// <summary>Property diskConfig: Disk configurations for the application pod.</summary>
        [JsiiProperty(name: "diskConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-acs.RosApplicationPod.DiskConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DiskConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property gpuCoreNumber: GPU core number, if using GPU.</summary>
        [JsiiProperty(name: "gpuCoreNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GpuCoreNumber
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property gpuModelSeries: GPU model series, if using GPU.</summary>
        [JsiiProperty(name: "gpuModelSeries", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GpuModelSeries
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property gpuType: GPU type, default is nvidia.com\/gpu.</summary>
        [JsiiProperty(name: "gpuType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GpuType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property replicas: Number of replicas for Deployment or StatefulSet.</summary>
        [JsiiProperty(name: "replicas", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Replicas
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property zoneId: Zone ID for the application pod.</summary>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ZoneId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ApplicationPod`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acs-applicationpod
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IApplicationPodProps), fullyQualifiedName: "@alicloud/ros-cdk-acs.ApplicationPodProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Acs.IApplicationPodProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property computeClass: Compute class of the application pod.</summary>
            [JsiiProperty(name: "computeClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ComputeClass
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property computeQos: Compute QoS of the application pod.</summary>
            [JsiiProperty(name: "computeQos", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ComputeQos
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property cpuCoreNumber: CPU core number required by the container.</summary>
            [JsiiProperty(name: "cpuCoreNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CpuCoreNumber
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property image: Container image for the application pod.</summary>
            [JsiiProperty(name: "image", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Image
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property kind: Kind of the application pod (Job, CronJob, Deployment, StatefulSet).</summary>
            [JsiiProperty(name: "kind", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Kind
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property memory: Memory size (in GB) required by the container.</summary>
            [JsiiProperty(name: "memory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Memory
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property diskConfig: Disk configurations for the application pod.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "diskConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-acs.RosApplicationPod.DiskConfigProperty\"}]}}", isOptional: true)]
            public object? DiskConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property gpuCoreNumber: GPU core number, if using GPU.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "gpuCoreNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GpuCoreNumber
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property gpuModelSeries: GPU model series, if using GPU.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "gpuModelSeries", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GpuModelSeries
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property gpuType: GPU type, default is nvidia.com\/gpu.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "gpuType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GpuType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property replicas: Number of replicas for Deployment or StatefulSet.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "replicas", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Replicas
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property zoneId: Zone ID for the application pod.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ZoneId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
