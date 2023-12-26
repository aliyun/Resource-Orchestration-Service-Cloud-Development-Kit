using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Bss
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `WaitOrder`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bss-waitorder
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-bss.WaitOrderProps")]
    public class WaitOrderProps : AlibabaCloud.SDK.ROS.CDK.Bss.IWaitOrderProps
    {
        private object _orderIds;

        /// <summary>Property orderIds: A list of order ids.</summary>
        [JsiiProperty(name: "orderIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object OrderIds
        {
            get => _orderIds;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case object[] cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: object[], {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: object[], {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _orderIds = value;
            }
        }

        private object? _cancelOnDelete;

        /// <summary>Property cancelOnDelete: Cancel order where delete the resource.</summary>
        /// <remarks>
        /// Ignore the paid order. Default true
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "cancelOnDelete", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? CancelOnDelete
        {
            get => _cancelOnDelete;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case bool cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _cancelOnDelete = value;
            }
        }

        private object? _waitForOrderProduced;

        /// <summary>Property waitForOrderProduced: Wait util all orders related ROS resources are produced.</summary>
        /// <remarks>
        /// Support ALIYUN::ECS::PrepayInstance, ALIYUN::RDS::PrepayDBInstance, ALIYUN::REDIS::PrepayInstance, ALIYUN::SLB::LoadBalancer, ALIYUN::VPC::EIP, ALIYUN::VPC::VpnGateway.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "waitForOrderProduced", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? WaitForOrderProduced
        {
            get => _waitForOrderProduced;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case bool cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _waitForOrderProduced = value;
            }
        }
    }
}
