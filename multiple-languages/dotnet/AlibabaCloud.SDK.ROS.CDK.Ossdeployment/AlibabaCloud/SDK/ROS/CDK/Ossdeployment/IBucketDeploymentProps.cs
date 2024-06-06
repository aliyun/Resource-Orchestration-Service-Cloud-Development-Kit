using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ossdeployment
{
    [JsiiInterface(nativeType: typeof(IBucketDeploymentProps), fullyQualifiedName: "@alicloud/ros-cdk-ossdeployment.BucketDeploymentProps")]
    public interface IBucketDeploymentProps
    {
        /// <summary>The OSS bucket to sync the contents of the zip file to.</summary>
        [JsiiProperty(name: "destinationBucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.Bucket\"}]}}")]
        object DestinationBucket
        {
            get;
        }

        /// <summary>The sources from which to deploy the contents of this bucket.</summary>
        [JsiiProperty(name: "sources", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ossdeployment.ISource\"},\"kind\":\"array\"}}")]
        AlibabaCloud.SDK.ROS.CDK.Ossdeployment.ISource[] Sources
        {
            get;
        }

        /// <summary>Whether log monitoring is enabled.</summary>
        /// <remarks>
        /// Enabling log monitoring allows you to record the details of your deployment,
        /// which makes it easier to troubleshoot when something goes wrong.
        ///
        /// Enabling logging monitoring incurs an additional logging service fee.
        ///
        /// <strong>Default</strong>: - false
        /// </remarks>
        [JsiiProperty(name: "logMonitoring", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        bool? LogMonitoring
        {
            get
            {
                return null;
            }
        }

        /// <summary>If this is set to false, the bucket temporarily storing the asset or data will be deleted after the asset or data is deployed to the destination bucket.</summary>
        /// <remarks>
        /// Otherwise, the temporary bucket will be deleted when the stack is destroyed.
        ///
        /// <strong>Default</strong>: - false
        /// </remarks>
        [JsiiProperty(name: "retainOnCreate", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        bool? RetainOnCreate
        {
            get
            {
                return null;
            }
        }

        /// <summary>The ARN of the execution role associated with this function.</summary>
        /// <remarks>
        /// <strong>Default</strong>: -  A role is automatically created
        /// </remarks>
        [JsiiProperty(name: "roleArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RoleArn
        {
            get
            {
                return null;
            }
        }

        /// <summary>The timeout period in seconds for the function to run.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - 60
        /// </remarks>
        [JsiiProperty(name: "timeout", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? Timeout
        {
            get
            {
                return null;
            }
        }

        [JsiiTypeProxy(nativeType: typeof(IBucketDeploymentProps), fullyQualifiedName: "@alicloud/ros-cdk-ossdeployment.BucketDeploymentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ossdeployment.IBucketDeploymentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>The OSS bucket to sync the contents of the zip file to.</summary>
            [JsiiProperty(name: "destinationBucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.Bucket\"}]}}")]
            public object DestinationBucket
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>The sources from which to deploy the contents of this bucket.</summary>
            [JsiiProperty(name: "sources", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ossdeployment.ISource\"},\"kind\":\"array\"}}")]
            public AlibabaCloud.SDK.ROS.CDK.Ossdeployment.ISource[] Sources
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ossdeployment.ISource[]>()!;
            }

            /// <summary>Whether log monitoring is enabled.</summary>
            /// <remarks>
            /// Enabling log monitoring allows you to record the details of your deployment,
            /// which makes it easier to troubleshoot when something goes wrong.
            ///
            /// Enabling logging monitoring incurs an additional logging service fee.
            ///
            /// <strong>Default</strong>: - false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "logMonitoring", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
            public bool? LogMonitoring
            {
                get => GetInstanceProperty<bool?>();
            }

            /// <summary>If this is set to false, the bucket temporarily storing the asset or data will be deleted after the asset or data is deployed to the destination bucket.</summary>
            /// <remarks>
            /// Otherwise, the temporary bucket will be deleted when the stack is destroyed.
            ///
            /// <strong>Default</strong>: - false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "retainOnCreate", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
            public bool? RetainOnCreate
            {
                get => GetInstanceProperty<bool?>();
            }

            /// <summary>The ARN of the execution role associated with this function.</summary>
            /// <remarks>
            /// <strong>Default</strong>: -  A role is automatically created
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "roleArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RoleArn
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>The timeout period in seconds for the function to run.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - 60
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "timeout", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Timeout
            {
                get => GetInstanceProperty<double?>();
            }
        }
    }
}
