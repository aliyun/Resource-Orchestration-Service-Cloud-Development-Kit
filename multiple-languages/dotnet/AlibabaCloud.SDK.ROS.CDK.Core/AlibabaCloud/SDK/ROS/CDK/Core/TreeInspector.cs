using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Inspector that maintains an attribute bag.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.TreeInspector), fullyQualifiedName: "@alicloud/ros-cdk-core.TreeInspector")]
    public class TreeInspector : DeputyBase
    {
        public TreeInspector(): base(_MakeDeputyProps())
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps()
        {
            return new DeputyProps(System.Array.Empty<object?>());
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected TreeInspector(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected TreeInspector(DeputyProps props): base(props)
        {
        }

        /// <summary>Adds attribute to bag.</summary>
        /// <param name="key">- key for metadata.</param>
        /// <param name="value">- value of metadata.</param>
        /// <remarks>
        /// Keys should be added by convention to prevent conflicts
        /// </remarks>
        [JsiiMethod(name: "addAttribute", parametersJson: "[{\"docs\":{\"summary\":\"- key for metadata.\"},\"name\":\"key\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- value of metadata.\"},\"name\":\"value\",\"type\":{\"primitive\":\"any\"}}]")]
        public virtual void AddAttribute(string key, object @value)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(string), typeof(object)}, new object[]{key, @value});
        }

        /// <summary>Represents the bag of attributes as key-value pairs.</summary>
        [JsiiProperty(name: "attributes", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        public virtual System.Collections.Generic.IDictionary<string, object> Attributes
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }
    }
}
