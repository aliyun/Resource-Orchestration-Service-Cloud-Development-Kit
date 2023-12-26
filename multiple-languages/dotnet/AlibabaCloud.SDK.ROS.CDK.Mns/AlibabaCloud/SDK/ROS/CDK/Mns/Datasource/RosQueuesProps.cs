using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mns.Datasource
{
    /// <summary>Properties for defining a `RosQueues`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-queues
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-mns.datasource.RosQueuesProps")]
    public class RosQueuesProps : AlibabaCloud.SDK.ROS.CDK.Mns.Datasource.IRosQueuesProps
    {
        private object? _queueName;

        /// <remarks>
        /// <strong>Property</strong>: queueName: Queue name.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "queueName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? QueueName
        {
            get => _queueName;
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
                _queueName = value;
            }
        }
    }
}
