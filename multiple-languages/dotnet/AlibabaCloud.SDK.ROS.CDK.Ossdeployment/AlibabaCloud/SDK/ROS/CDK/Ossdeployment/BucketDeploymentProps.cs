using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ossdeployment
{
    #pragma warning disable CS8618

    [JsiiByValue(fqn: "@alicloud/ros-cdk-ossdeployment.BucketDeploymentProps")]
    public class BucketDeploymentProps : AlibabaCloud.SDK.ROS.CDK.Ossdeployment.IBucketDeploymentProps
    {
        private object _destinationBucket;

        /// <summary>The OSS bucket to sync the contents of the zip file to.</summary>
        [JsiiProperty(name: "destinationBucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.Bucket\"}]}}")]
        public object DestinationBucket
        {
            get => _destinationBucket;
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
                        case AlibabaCloud.SDK.ROS.CDK.Oss.Bucket cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.Bucket).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Oss.Bucket).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _destinationBucket = value;
            }
        }

        /// <summary>The sources from which to deploy the contents of this bucket.</summary>
        [JsiiProperty(name: "sources", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ossdeployment.ISource\"},\"kind\":\"array\"}}")]
        public AlibabaCloud.SDK.ROS.CDK.Ossdeployment.ISource[] Sources
        {
            get;
            set;
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
            get;
            set;
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
            get;
            set;
        }

        private object? _roleArn;

        /// <summary>The ARN of the execution role associated with this function.</summary>
        /// <remarks>
        /// <strong>Default</strong>: -  A role is automatically created
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "roleArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? RoleArn
        {
            get => _roleArn;
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
                _roleArn = value;
            }
        }

        /// <summary>The timeout period in seconds for the function to run.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - 60
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "timeout", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public double? Timeout
        {
            get;
            set;
        }
    }
}
