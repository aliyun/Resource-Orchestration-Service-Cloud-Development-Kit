using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Represents a mapping.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.RosMapping), fullyQualifiedName: "@alicloud/ros-cdk-core.RosMapping", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.RosMappingProps\"}}]")]
    public class RosMapping : AlibabaCloud.SDK.ROS.CDK.Core.RosRefElement
    {
        public RosMapping(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Core.IRosMappingProps? props = null): base(new DeputyProps(new object?[]{scope, id, props}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosMapping(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosMapping(DeputyProps props): base(props)
        {
        }

        /// <returns>A reference to a value in the map based on the two keys.</returns>
        [JsiiMethod(name: "findInMap", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"name\":\"key1\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"key2\",\"type\":{\"primitive\":\"string\"}}]")]
        public virtual string FindInMap(string key1, string key2)
        {
            return InvokeInstanceMethod<string>(new System.Type[]{typeof(string), typeof(string)}, new object[]{key1, key2})!;
        }

        /// <summary>Sets a value in the map based on the two keys.</summary>
        [JsiiMethod(name: "setValue", parametersJson: "[{\"name\":\"key1\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"key2\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"value\",\"type\":{\"primitive\":\"any\"}}]")]
        public virtual void SetValue(string key1, string key2, object @value)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(string), typeof(string), typeof(object)}, new object[]{key1, key2, @value});
        }
    }
}
