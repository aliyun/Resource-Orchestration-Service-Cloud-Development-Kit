package com.aliyun.ros.cdk.fc3;

/**
 * Properties for defining a <code>RosProvisionConfig</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-provisionconfig
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:16.942Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.RosProvisionConfigProps")
@software.amazon.jsii.Jsii.Proxy(RosProvisionConfigProps.Jsii$Proxy.class)
public interface RosProvisionConfigProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDefaultTarget();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFunctionName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAlwaysAllocateCpu() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAlwaysAllocateGpu() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getQualifier() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScheduledActions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTargetTrackingPolicies() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosProvisionConfigProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosProvisionConfigProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosProvisionConfigProps> {
        java.lang.Object defaultTarget;
        java.lang.Object functionName;
        java.lang.Object alwaysAllocateCpu;
        java.lang.Object alwaysAllocateGpu;
        java.lang.Object qualifier;
        java.lang.Object scheduledActions;
        java.lang.Object targetTrackingPolicies;

        /**
         * Sets the value of {@link RosProvisionConfigProps#getDefaultTarget}
         * @param defaultTarget the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder defaultTarget(java.lang.Number defaultTarget) {
            this.defaultTarget = defaultTarget;
            return this;
        }

        /**
         * Sets the value of {@link RosProvisionConfigProps#getDefaultTarget}
         * @param defaultTarget the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder defaultTarget(com.aliyun.ros.cdk.core.IResolvable defaultTarget) {
            this.defaultTarget = defaultTarget;
            return this;
        }

        /**
         * Sets the value of {@link RosProvisionConfigProps#getFunctionName}
         * @param functionName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder functionName(java.lang.String functionName) {
            this.functionName = functionName;
            return this;
        }

        /**
         * Sets the value of {@link RosProvisionConfigProps#getFunctionName}
         * @param functionName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder functionName(com.aliyun.ros.cdk.core.IResolvable functionName) {
            this.functionName = functionName;
            return this;
        }

        /**
         * Sets the value of {@link RosProvisionConfigProps#getAlwaysAllocateCpu}
         * @param alwaysAllocateCpu the value to be set.
         * @return {@code this}
         */
        public Builder alwaysAllocateCpu(java.lang.Boolean alwaysAllocateCpu) {
            this.alwaysAllocateCpu = alwaysAllocateCpu;
            return this;
        }

        /**
         * Sets the value of {@link RosProvisionConfigProps#getAlwaysAllocateCpu}
         * @param alwaysAllocateCpu the value to be set.
         * @return {@code this}
         */
        public Builder alwaysAllocateCpu(com.aliyun.ros.cdk.core.IResolvable alwaysAllocateCpu) {
            this.alwaysAllocateCpu = alwaysAllocateCpu;
            return this;
        }

        /**
         * Sets the value of {@link RosProvisionConfigProps#getAlwaysAllocateGpu}
         * @param alwaysAllocateGpu the value to be set.
         * @return {@code this}
         */
        public Builder alwaysAllocateGpu(java.lang.Boolean alwaysAllocateGpu) {
            this.alwaysAllocateGpu = alwaysAllocateGpu;
            return this;
        }

        /**
         * Sets the value of {@link RosProvisionConfigProps#getAlwaysAllocateGpu}
         * @param alwaysAllocateGpu the value to be set.
         * @return {@code this}
         */
        public Builder alwaysAllocateGpu(com.aliyun.ros.cdk.core.IResolvable alwaysAllocateGpu) {
            this.alwaysAllocateGpu = alwaysAllocateGpu;
            return this;
        }

        /**
         * Sets the value of {@link RosProvisionConfigProps#getQualifier}
         * @param qualifier the value to be set.
         * @return {@code this}
         */
        public Builder qualifier(java.lang.String qualifier) {
            this.qualifier = qualifier;
            return this;
        }

        /**
         * Sets the value of {@link RosProvisionConfigProps#getQualifier}
         * @param qualifier the value to be set.
         * @return {@code this}
         */
        public Builder qualifier(com.aliyun.ros.cdk.core.IResolvable qualifier) {
            this.qualifier = qualifier;
            return this;
        }

        /**
         * Sets the value of {@link RosProvisionConfigProps#getScheduledActions}
         * @param scheduledActions the value to be set.
         * @return {@code this}
         */
        public Builder scheduledActions(com.aliyun.ros.cdk.core.IResolvable scheduledActions) {
            this.scheduledActions = scheduledActions;
            return this;
        }

        /**
         * Sets the value of {@link RosProvisionConfigProps#getScheduledActions}
         * @param scheduledActions the value to be set.
         * @return {@code this}
         */
        public Builder scheduledActions(java.util.List<? extends java.lang.Object> scheduledActions) {
            this.scheduledActions = scheduledActions;
            return this;
        }

        /**
         * Sets the value of {@link RosProvisionConfigProps#getTargetTrackingPolicies}
         * @param targetTrackingPolicies the value to be set.
         * @return {@code this}
         */
        public Builder targetTrackingPolicies(com.aliyun.ros.cdk.core.IResolvable targetTrackingPolicies) {
            this.targetTrackingPolicies = targetTrackingPolicies;
            return this;
        }

        /**
         * Sets the value of {@link RosProvisionConfigProps#getTargetTrackingPolicies}
         * @param targetTrackingPolicies the value to be set.
         * @return {@code this}
         */
        public Builder targetTrackingPolicies(java.util.List<? extends java.lang.Object> targetTrackingPolicies) {
            this.targetTrackingPolicies = targetTrackingPolicies;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosProvisionConfigProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosProvisionConfigProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosProvisionConfigProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosProvisionConfigProps {
        private final java.lang.Object defaultTarget;
        private final java.lang.Object functionName;
        private final java.lang.Object alwaysAllocateCpu;
        private final java.lang.Object alwaysAllocateGpu;
        private final java.lang.Object qualifier;
        private final java.lang.Object scheduledActions;
        private final java.lang.Object targetTrackingPolicies;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.defaultTarget = software.amazon.jsii.Kernel.get(this, "defaultTarget", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.functionName = software.amazon.jsii.Kernel.get(this, "functionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.alwaysAllocateCpu = software.amazon.jsii.Kernel.get(this, "alwaysAllocateCpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.alwaysAllocateGpu = software.amazon.jsii.Kernel.get(this, "alwaysAllocateGpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.qualifier = software.amazon.jsii.Kernel.get(this, "qualifier", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scheduledActions = software.amazon.jsii.Kernel.get(this, "scheduledActions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.targetTrackingPolicies = software.amazon.jsii.Kernel.get(this, "targetTrackingPolicies", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.defaultTarget = java.util.Objects.requireNonNull(builder.defaultTarget, "defaultTarget is required");
            this.functionName = java.util.Objects.requireNonNull(builder.functionName, "functionName is required");
            this.alwaysAllocateCpu = builder.alwaysAllocateCpu;
            this.alwaysAllocateGpu = builder.alwaysAllocateGpu;
            this.qualifier = builder.qualifier;
            this.scheduledActions = builder.scheduledActions;
            this.targetTrackingPolicies = builder.targetTrackingPolicies;
        }

        @Override
        public final java.lang.Object getDefaultTarget() {
            return this.defaultTarget;
        }

        @Override
        public final java.lang.Object getFunctionName() {
            return this.functionName;
        }

        @Override
        public final java.lang.Object getAlwaysAllocateCpu() {
            return this.alwaysAllocateCpu;
        }

        @Override
        public final java.lang.Object getAlwaysAllocateGpu() {
            return this.alwaysAllocateGpu;
        }

        @Override
        public final java.lang.Object getQualifier() {
            return this.qualifier;
        }

        @Override
        public final java.lang.Object getScheduledActions() {
            return this.scheduledActions;
        }

        @Override
        public final java.lang.Object getTargetTrackingPolicies() {
            return this.targetTrackingPolicies;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("defaultTarget", om.valueToTree(this.getDefaultTarget()));
            data.set("functionName", om.valueToTree(this.getFunctionName()));
            if (this.getAlwaysAllocateCpu() != null) {
                data.set("alwaysAllocateCpu", om.valueToTree(this.getAlwaysAllocateCpu()));
            }
            if (this.getAlwaysAllocateGpu() != null) {
                data.set("alwaysAllocateGpu", om.valueToTree(this.getAlwaysAllocateGpu()));
            }
            if (this.getQualifier() != null) {
                data.set("qualifier", om.valueToTree(this.getQualifier()));
            }
            if (this.getScheduledActions() != null) {
                data.set("scheduledActions", om.valueToTree(this.getScheduledActions()));
            }
            if (this.getTargetTrackingPolicies() != null) {
                data.set("targetTrackingPolicies", om.valueToTree(this.getTargetTrackingPolicies()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc3.RosProvisionConfigProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosProvisionConfigProps.Jsii$Proxy that = (RosProvisionConfigProps.Jsii$Proxy) o;

            if (!defaultTarget.equals(that.defaultTarget)) return false;
            if (!functionName.equals(that.functionName)) return false;
            if (this.alwaysAllocateCpu != null ? !this.alwaysAllocateCpu.equals(that.alwaysAllocateCpu) : that.alwaysAllocateCpu != null) return false;
            if (this.alwaysAllocateGpu != null ? !this.alwaysAllocateGpu.equals(that.alwaysAllocateGpu) : that.alwaysAllocateGpu != null) return false;
            if (this.qualifier != null ? !this.qualifier.equals(that.qualifier) : that.qualifier != null) return false;
            if (this.scheduledActions != null ? !this.scheduledActions.equals(that.scheduledActions) : that.scheduledActions != null) return false;
            return this.targetTrackingPolicies != null ? this.targetTrackingPolicies.equals(that.targetTrackingPolicies) : that.targetTrackingPolicies == null;
        }

        @Override
        public final int hashCode() {
            int result = this.defaultTarget.hashCode();
            result = 31 * result + (this.functionName.hashCode());
            result = 31 * result + (this.alwaysAllocateCpu != null ? this.alwaysAllocateCpu.hashCode() : 0);
            result = 31 * result + (this.alwaysAllocateGpu != null ? this.alwaysAllocateGpu.hashCode() : 0);
            result = 31 * result + (this.qualifier != null ? this.qualifier.hashCode() : 0);
            result = 31 * result + (this.scheduledActions != null ? this.scheduledActions.hashCode() : 0);
            result = 31 * result + (this.targetTrackingPolicies != null ? this.targetTrackingPolicies.hashCode() : 0);
            return result;
        }
    }
}
