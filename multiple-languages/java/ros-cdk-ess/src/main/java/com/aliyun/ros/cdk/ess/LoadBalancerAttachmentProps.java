package com.aliyun.ros.cdk.ess;

/**
 * Properties for defining a <code>LoadBalancerAttachment</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-loadbalancerattachment
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:06.630Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.LoadBalancerAttachmentProps")
@software.amazon.jsii.Jsii.Proxy(LoadBalancerAttachmentProps.Jsii$Proxy.class)
public interface LoadBalancerAttachmentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property scalingGroupId: The ID of the scaling group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getScalingGroupId();

    /**
     * Property forceAttach: Specifies whether to add all instances in the current scaling group to the backend server groups of the attached CLB instance.
     * <p>
     * Valid values:
     * true
     * false
     * Default value: false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getForceAttach() {
        return null;
    }

    /**
     * Property loadBalancerConfigs: Load balancer configuration list.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoadBalancerConfigs() {
        return null;
    }

    /**
     * Property loadBalancers: The ID of CLB instance N that you want to attach to the scaling group.
     * <p>
     * Valid values of N: 1 to 5.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoadBalancers() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link LoadBalancerAttachmentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link LoadBalancerAttachmentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<LoadBalancerAttachmentProps> {
        java.lang.Object scalingGroupId;
        java.lang.Object forceAttach;
        java.lang.Object loadBalancerConfigs;
        java.lang.Object loadBalancers;

        /**
         * Sets the value of {@link LoadBalancerAttachmentProps#getScalingGroupId}
         * @param scalingGroupId Property scalingGroupId: The ID of the scaling group. This parameter is required.
         * @return {@code this}
         */
        public Builder scalingGroupId(java.lang.String scalingGroupId) {
            this.scalingGroupId = scalingGroupId;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerAttachmentProps#getScalingGroupId}
         * @param scalingGroupId Property scalingGroupId: The ID of the scaling group. This parameter is required.
         * @return {@code this}
         */
        public Builder scalingGroupId(com.aliyun.ros.cdk.core.IResolvable scalingGroupId) {
            this.scalingGroupId = scalingGroupId;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerAttachmentProps#getForceAttach}
         * @param forceAttach Property forceAttach: Specifies whether to add all instances in the current scaling group to the backend server groups of the attached CLB instance.
         *                    Valid values:
         *                    true
         *                    false
         *                    Default value: false.
         * @return {@code this}
         */
        public Builder forceAttach(java.lang.Boolean forceAttach) {
            this.forceAttach = forceAttach;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerAttachmentProps#getForceAttach}
         * @param forceAttach Property forceAttach: Specifies whether to add all instances in the current scaling group to the backend server groups of the attached CLB instance.
         *                    Valid values:
         *                    true
         *                    false
         *                    Default value: false.
         * @return {@code this}
         */
        public Builder forceAttach(com.aliyun.ros.cdk.core.IResolvable forceAttach) {
            this.forceAttach = forceAttach;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerAttachmentProps#getLoadBalancerConfigs}
         * @param loadBalancerConfigs Property loadBalancerConfigs: Load balancer configuration list.
         * @return {@code this}
         */
        public Builder loadBalancerConfigs(com.aliyun.ros.cdk.core.IResolvable loadBalancerConfigs) {
            this.loadBalancerConfigs = loadBalancerConfigs;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerAttachmentProps#getLoadBalancerConfigs}
         * @param loadBalancerConfigs Property loadBalancerConfigs: Load balancer configuration list.
         * @return {@code this}
         */
        public Builder loadBalancerConfigs(java.util.List<? extends java.lang.Object> loadBalancerConfigs) {
            this.loadBalancerConfigs = loadBalancerConfigs;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerAttachmentProps#getLoadBalancers}
         * @param loadBalancers Property loadBalancers: The ID of CLB instance N that you want to attach to the scaling group.
         *                      Valid values of N: 1 to 5.
         * @return {@code this}
         */
        public Builder loadBalancers(com.aliyun.ros.cdk.core.IResolvable loadBalancers) {
            this.loadBalancers = loadBalancers;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerAttachmentProps#getLoadBalancers}
         * @param loadBalancers Property loadBalancers: The ID of CLB instance N that you want to attach to the scaling group.
         *                      Valid values of N: 1 to 5.
         * @return {@code this}
         */
        public Builder loadBalancers(java.util.List<? extends java.lang.Object> loadBalancers) {
            this.loadBalancers = loadBalancers;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link LoadBalancerAttachmentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public LoadBalancerAttachmentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link LoadBalancerAttachmentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements LoadBalancerAttachmentProps {
        private final java.lang.Object scalingGroupId;
        private final java.lang.Object forceAttach;
        private final java.lang.Object loadBalancerConfigs;
        private final java.lang.Object loadBalancers;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.scalingGroupId = software.amazon.jsii.Kernel.get(this, "scalingGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.forceAttach = software.amazon.jsii.Kernel.get(this, "forceAttach", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loadBalancerConfigs = software.amazon.jsii.Kernel.get(this, "loadBalancerConfigs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loadBalancers = software.amazon.jsii.Kernel.get(this, "loadBalancers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.scalingGroupId = java.util.Objects.requireNonNull(builder.scalingGroupId, "scalingGroupId is required");
            this.forceAttach = builder.forceAttach;
            this.loadBalancerConfigs = builder.loadBalancerConfigs;
            this.loadBalancers = builder.loadBalancers;
        }

        @Override
        public final java.lang.Object getScalingGroupId() {
            return this.scalingGroupId;
        }

        @Override
        public final java.lang.Object getForceAttach() {
            return this.forceAttach;
        }

        @Override
        public final java.lang.Object getLoadBalancerConfigs() {
            return this.loadBalancerConfigs;
        }

        @Override
        public final java.lang.Object getLoadBalancers() {
            return this.loadBalancers;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("scalingGroupId", om.valueToTree(this.getScalingGroupId()));
            if (this.getForceAttach() != null) {
                data.set("forceAttach", om.valueToTree(this.getForceAttach()));
            }
            if (this.getLoadBalancerConfigs() != null) {
                data.set("loadBalancerConfigs", om.valueToTree(this.getLoadBalancerConfigs()));
            }
            if (this.getLoadBalancers() != null) {
                data.set("loadBalancers", om.valueToTree(this.getLoadBalancers()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.LoadBalancerAttachmentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            LoadBalancerAttachmentProps.Jsii$Proxy that = (LoadBalancerAttachmentProps.Jsii$Proxy) o;

            if (!scalingGroupId.equals(that.scalingGroupId)) return false;
            if (this.forceAttach != null ? !this.forceAttach.equals(that.forceAttach) : that.forceAttach != null) return false;
            if (this.loadBalancerConfigs != null ? !this.loadBalancerConfigs.equals(that.loadBalancerConfigs) : that.loadBalancerConfigs != null) return false;
            return this.loadBalancers != null ? this.loadBalancers.equals(that.loadBalancers) : that.loadBalancers == null;
        }

        @Override
        public final int hashCode() {
            int result = this.scalingGroupId.hashCode();
            result = 31 * result + (this.forceAttach != null ? this.forceAttach.hashCode() : 0);
            result = 31 * result + (this.loadBalancerConfigs != null ? this.loadBalancerConfigs.hashCode() : 0);
            result = 31 * result + (this.loadBalancers != null ? this.loadBalancers.hashCode() : 0);
            return result;
        }
    }
}
