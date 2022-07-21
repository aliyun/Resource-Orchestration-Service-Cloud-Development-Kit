package com.aliyun.ros.cdk.ros;

/**
 * Properties for defining a `ALIYUN::ROS::WaitConditionHandle`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.62.0 (build 293ac17)", date = "2022-07-21T02:24:26.349Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.WaitConditionHandleProps")
@software.amazon.jsii.Jsii.Proxy(WaitConditionHandleProps.Jsii$Proxy.class)
public interface WaitConditionHandleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property count: There are 3 preconditions that make Count taking effect: 1.Mode is set to Full. 2.Count >= 0. 3.The id of signal is not specified. If so, it will be a self-increasing integer started from 1. For example, the id of the first signal is 1, the id of the second signal is 2, and so on.
     * <p>
     * If Count takes effect, signals with id &gt; Count will be deleted before update.
     * The default value is -1, which means no effect.
     * It is recommended to quote the same value with WaitCondition.Count.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCount() {
        return null;
    }

    /**
     * Property mode: If set to Increment, all old signals will be deleted before update.
     * <p>
     * In this mode, WaitCondition.Count should reference an incremental value instead of a full value, such as ScalingGroupEnable.ScalingRuleArisExecuteResultNumberOfAddedInstances.
     * <p>
     * If set to Full, no old signal will be deleted unless Count is set. In this mode, WaitCondition.Count should reference a full value, such as the same value with InstanceGroup.MaxAmount. It is recommended to use this mode with Count.
     * <p>
     * Default to Full.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMode() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link WaitConditionHandleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link WaitConditionHandleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<WaitConditionHandleProps> {
        java.lang.Object count;
        java.lang.Object mode;

        /**
         * Sets the value of {@link WaitConditionHandleProps#getCount}
         * @param count Property count: There are 3 preconditions that make Count taking effect: 1.Mode is set to Full. 2.Count >= 0. 3.The id of signal is not specified. If so, it will be a self-increasing integer started from 1. For example, the id of the first signal is 1, the id of the second signal is 2, and so on.
         *              If Count takes effect, signals with id &gt; Count will be deleted before update.
         *              The default value is -1, which means no effect.
         *              It is recommended to quote the same value with WaitCondition.Count.
         * @return {@code this}
         */
        public Builder count(java.lang.Number count) {
            this.count = count;
            return this;
        }

        /**
         * Sets the value of {@link WaitConditionHandleProps#getCount}
         * @param count Property count: There are 3 preconditions that make Count taking effect: 1.Mode is set to Full. 2.Count >= 0. 3.The id of signal is not specified. If so, it will be a self-increasing integer started from 1. For example, the id of the first signal is 1, the id of the second signal is 2, and so on.
         *              If Count takes effect, signals with id &gt; Count will be deleted before update.
         *              The default value is -1, which means no effect.
         *              It is recommended to quote the same value with WaitCondition.Count.
         * @return {@code this}
         */
        public Builder count(com.aliyun.ros.cdk.core.IResolvable count) {
            this.count = count;
            return this;
        }

        /**
         * Sets the value of {@link WaitConditionHandleProps#getMode}
         * @param mode Property mode: If set to Increment, all old signals will be deleted before update.
         *             In this mode, WaitCondition.Count should reference an incremental value instead of a full value, such as ScalingGroupEnable.ScalingRuleArisExecuteResultNumberOfAddedInstances.
         *             <p>
         *             If set to Full, no old signal will be deleted unless Count is set. In this mode, WaitCondition.Count should reference a full value, such as the same value with InstanceGroup.MaxAmount. It is recommended to use this mode with Count.
         *             <p>
         *             Default to Full.
         * @return {@code this}
         */
        public Builder mode(java.lang.String mode) {
            this.mode = mode;
            return this;
        }

        /**
         * Sets the value of {@link WaitConditionHandleProps#getMode}
         * @param mode Property mode: If set to Increment, all old signals will be deleted before update.
         *             In this mode, WaitCondition.Count should reference an incremental value instead of a full value, such as ScalingGroupEnable.ScalingRuleArisExecuteResultNumberOfAddedInstances.
         *             <p>
         *             If set to Full, no old signal will be deleted unless Count is set. In this mode, WaitCondition.Count should reference a full value, such as the same value with InstanceGroup.MaxAmount. It is recommended to use this mode with Count.
         *             <p>
         *             Default to Full.
         * @return {@code this}
         */
        public Builder mode(com.aliyun.ros.cdk.core.IResolvable mode) {
            this.mode = mode;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link WaitConditionHandleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public WaitConditionHandleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link WaitConditionHandleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements WaitConditionHandleProps {
        private final java.lang.Object count;
        private final java.lang.Object mode;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.count = software.amazon.jsii.Kernel.get(this, "count", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.mode = software.amazon.jsii.Kernel.get(this, "mode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.count = builder.count;
            this.mode = builder.mode;
        }

        @Override
        public final java.lang.Object getCount() {
            return this.count;
        }

        @Override
        public final java.lang.Object getMode() {
            return this.mode;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getCount() != null) {
                data.set("count", om.valueToTree(this.getCount()));
            }
            if (this.getMode() != null) {
                data.set("mode", om.valueToTree(this.getMode()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ros.WaitConditionHandleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            WaitConditionHandleProps.Jsii$Proxy that = (WaitConditionHandleProps.Jsii$Proxy) o;

            if (this.count != null ? !this.count.equals(that.count) : that.count != null) return false;
            return this.mode != null ? this.mode.equals(that.mode) : that.mode == null;
        }

        @Override
        public final int hashCode() {
            int result = this.count != null ? this.count.hashCode() : 0;
            result = 31 * result + (this.mode != null ? this.mode.hashCode() : 0);
            return result;
        }
    }
}
