using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Emr.Datasource
{
    /// <summary>Properties for defining a `RosFlowProjects`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-emr-flowprojects
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-emr.datasource.RosFlowProjectsProps")]
    public class RosFlowProjectsProps : AlibabaCloud.SDK.ROS.CDK.Emr.Datasource.IRosFlowProjectsProps
    {
        private object? _flowProjectId;

        /// <remarks>
        /// <strong>Property</strong>: flowProjectId: The first ID of the resource
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "flowProjectId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? FlowProjectId
        {
            get => _flowProjectId;
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
                _flowProjectId = value;
            }
        }

        private object? _flowProjectName;

        /// <remarks>
        /// <strong>Property</strong>: flowProjectName: Project name.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "flowProjectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? FlowProjectName
        {
            get => _flowProjectName;
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
                _flowProjectName = value;
            }
        }
    }
}
