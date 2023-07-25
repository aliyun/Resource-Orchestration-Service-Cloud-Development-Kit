using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls.Datasource
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `DATASOURCE::SLS::Logstores`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-sls.datasource.RosLogstoresProps")]
    public class RosLogstoresProps : AlibabaCloud.SDK.ROS.CDK.Sls.Datasource.IRosLogstoresProps
    {
        private object _project;

        /// <remarks>
        /// <strong>Property</strong>: project: Project name.
        /// </remarks>
        [JsiiProperty(name: "project", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Project
        {
            get => _project;
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
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _project = value;
            }
        }

        private object? _logstoreName;

        /// <remarks>
        /// <strong>Property</strong>: logstoreName: Logstore name.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "logstoreName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? LogstoreName
        {
            get => _logstoreName;
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
                _logstoreName = value;
            }
        }
    }
}
