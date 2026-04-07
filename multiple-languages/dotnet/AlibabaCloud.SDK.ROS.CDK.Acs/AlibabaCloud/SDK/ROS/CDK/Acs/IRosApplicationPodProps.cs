using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Acs
{
    /// <summary>Properties for defining a `RosApplicationPod`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acs-applicationpod
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosApplicationPodProps), fullyQualifiedName: "@alicloud/ros-cdk-acs.RosApplicationPodProps")]
    public interface IRosApplicationPodProps
    {
        /// <remarks>
        /// <strong>Property</strong>: computeClass: Compute class of the application pod.
        /// </remarks>
        [JsiiProperty(name: "computeClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ComputeClass
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: computeQos: Compute QoS of the application pod.
        /// </remarks>
        [JsiiProperty(name: "computeQos", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ComputeQos
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: cpuCoreNumber: CPU core number required by the container.
        /// </remarks>
        [JsiiProperty(name: "cpuCoreNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CpuCoreNumber
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: image: Container image for the application pod.
        /// </remarks>
        [JsiiProperty(name: "image", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Image
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: kind: Kind of the application pod (Job, CronJob, Deployment, StatefulSet).
        /// </remarks>
        [JsiiProperty(name: "kind", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Kind
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: memory: Memory size (in GB) required by the container.
        /// </remarks>
        [JsiiProperty(name: "memory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Memory
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: diskConfig: Disk configurations for the application pod.
        /// </remarks>
        [JsiiProperty(name: "diskConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-acs.RosApplicationPod.DiskConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DiskConfig
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: gpuCoreNumber: GPU core number, if using GPU.
        /// </remarks>
        [JsiiProperty(name: "gpuCoreNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GpuCoreNumber
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: gpuModelSeries: GPU model series, if using GPU.
        /// </remarks>
        [JsiiProperty(name: "gpuModelSeries", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GpuModelSeries
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: gpuType: GPU type, default is nvidia.com\/gpu.
        /// </remarks>
        [JsiiProperty(name: "gpuType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GpuType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: replicas: Number of replicas for Deployment or StatefulSet.
        /// </remarks>
        [JsiiProperty(name: "replicas", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Replicas
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: Zone ID for the application pod.
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ZoneId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosApplicationPod`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acs-applicationpod
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosApplicationPodProps), fullyQualifiedName: "@alicloud/ros-cdk-acs.RosApplicationPodProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Acs.IRosApplicationPodProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: computeClass: Compute class of the application pod.
            /// </remarks>
            [JsiiProperty(name: "computeClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ComputeClass
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: computeQos: Compute QoS of the application pod.
            /// </remarks>
            [JsiiProperty(name: "computeQos", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ComputeQos
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: cpuCoreNumber: CPU core number required by the container.
            /// </remarks>
            [JsiiProperty(name: "cpuCoreNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CpuCoreNumber
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: image: Container image for the application pod.
            /// </remarks>
            [JsiiProperty(name: "image", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Image
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: kind: Kind of the application pod (Job, CronJob, Deployment, StatefulSet).
            /// </remarks>
            [JsiiProperty(name: "kind", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Kind
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: memory: Memory size (in GB) required by the container.
            /// </remarks>
            [JsiiProperty(name: "memory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Memory
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: diskConfig: Disk configurations for the application pod.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "diskConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-acs.RosApplicationPod.DiskConfigProperty\"}]}}", isOptional: true)]
            public object? DiskConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: gpuCoreNumber: GPU core number, if using GPU.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "gpuCoreNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GpuCoreNumber
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: gpuModelSeries: GPU model series, if using GPU.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "gpuModelSeries", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GpuModelSeries
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: gpuType: GPU type, default is nvidia.com\/gpu.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "gpuType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GpuType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: replicas: Number of replicas for Deployment or StatefulSet.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "replicas", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Replicas
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: zoneId: Zone ID for the application pod.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ZoneId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
