package com.aliyun.ros.cdk.ess;

/**
 * Properties for defining a `ALIYUN::ESS::ScalingGroupEnable`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.926Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.ScalingGroupEnableProps")
@software.amazon.jsii.Jsii.Proxy(ScalingGroupEnableProps.Jsii$Proxy.class)
public interface ScalingGroupEnableProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getScalingGroupId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceIds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRemoveInstanceIds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getScalingConfigurationId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScalingRuleAris() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getScalingRuleArisExecuteVersion() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ScalingGroupEnableProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ScalingGroupEnableProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ScalingGroupEnableProps> {
        private java.lang.String scalingGroupId;
        private java.lang.Object instanceIds;
        private java.lang.Object removeInstanceIds;
        private java.lang.String scalingConfigurationId;
        private java.lang.Object scalingRuleAris;
        private java.lang.Number scalingRuleArisExecuteVersion;

        /**
         * Sets the value of {@link ScalingGroupEnableProps#getScalingGroupId}
         * @param scalingGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder scalingGroupId(java.lang.String scalingGroupId) {
            this.scalingGroupId = scalingGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupEnableProps#getInstanceIds}
         * @param instanceIds the value to be set.
         * @return {@code this}
         */
        public Builder instanceIds(java.util.List<? extends java.lang.Object> instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupEnableProps#getInstanceIds}
         * @param instanceIds the value to be set.
         * @return {@code this}
         */
        public Builder instanceIds(com.aliyun.ros.cdk.core.IResolvable instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupEnableProps#getRemoveInstanceIds}
         * @param removeInstanceIds the value to be set.
         * @return {@code this}
         */
        public Builder removeInstanceIds(java.util.List<? extends java.lang.Object> removeInstanceIds) {
            this.removeInstanceIds = removeInstanceIds;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupEnableProps#getRemoveInstanceIds}
         * @param removeInstanceIds the value to be set.
         * @return {@code this}
         */
        public Builder removeInstanceIds(com.aliyun.ros.cdk.core.IResolvable removeInstanceIds) {
            this.removeInstanceIds = removeInstanceIds;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupEnableProps#getScalingConfigurationId}
         * @param scalingConfigurationId the value to be set.
         * @return {@code this}
         */
        public Builder scalingConfigurationId(java.lang.String scalingConfigurationId) {
            this.scalingConfigurationId = scalingConfigurationId;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupEnableProps#getScalingRuleAris}
         * @param scalingRuleAris the value to be set.
         * @return {@code this}
         */
        public Builder scalingRuleAris(java.util.List<? extends java.lang.Object> scalingRuleAris) {
            this.scalingRuleAris = scalingRuleAris;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupEnableProps#getScalingRuleAris}
         * @param scalingRuleAris the value to be set.
         * @return {@code this}
         */
        public Builder scalingRuleAris(com.aliyun.ros.cdk.core.IResolvable scalingRuleAris) {
            this.scalingRuleAris = scalingRuleAris;
            return this;
        }

        /**
         * Sets the value of {@link ScalingGroupEnableProps#getScalingRuleArisExecuteVersion}
         * @param scalingRuleArisExecuteVersion the value to be set.
         * @return {@code this}
         */
        public Builder scalingRuleArisExecuteVersion(java.lang.Number scalingRuleArisExecuteVersion) {
            this.scalingRuleArisExecuteVersion = scalingRuleArisExecuteVersion;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ScalingGroupEnableProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ScalingGroupEnableProps build() {
            return new Jsii$Proxy(scalingGroupId, instanceIds, removeInstanceIds, scalingConfigurationId, scalingRuleAris, scalingRuleArisExecuteVersion);
        }
    }

    /**
     * An implementation for {@link ScalingGroupEnableProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ScalingGroupEnableProps {
        private final java.lang.String scalingGroupId;
        private final java.lang.Object instanceIds;
        private final java.lang.Object removeInstanceIds;
        private final java.lang.String scalingConfigurationId;
        private final java.lang.Object scalingRuleAris;
        private final java.lang.Number scalingRuleArisExecuteVersion;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.scalingGroupId = software.amazon.jsii.Kernel.get(this, "scalingGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.instanceIds = software.amazon.jsii.Kernel.get(this, "instanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.removeInstanceIds = software.amazon.jsii.Kernel.get(this, "removeInstanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scalingConfigurationId = software.amazon.jsii.Kernel.get(this, "scalingConfigurationId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.scalingRuleAris = software.amazon.jsii.Kernel.get(this, "scalingRuleAris", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scalingRuleArisExecuteVersion = software.amazon.jsii.Kernel.get(this, "scalingRuleArisExecuteVersion", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String scalingGroupId, final java.lang.Object instanceIds, final java.lang.Object removeInstanceIds, final java.lang.String scalingConfigurationId, final java.lang.Object scalingRuleAris, final java.lang.Number scalingRuleArisExecuteVersion) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.scalingGroupId = java.util.Objects.requireNonNull(scalingGroupId, "scalingGroupId is required");
            this.instanceIds = instanceIds;
            this.removeInstanceIds = removeInstanceIds;
            this.scalingConfigurationId = scalingConfigurationId;
            this.scalingRuleAris = scalingRuleAris;
            this.scalingRuleArisExecuteVersion = scalingRuleArisExecuteVersion;
        }

        @Override
        public final java.lang.String getScalingGroupId() {
            return this.scalingGroupId;
        }

        @Override
        public final java.lang.Object getInstanceIds() {
            return this.instanceIds;
        }

        @Override
        public final java.lang.Object getRemoveInstanceIds() {
            return this.removeInstanceIds;
        }

        @Override
        public final java.lang.String getScalingConfigurationId() {
            return this.scalingConfigurationId;
        }

        @Override
        public final java.lang.Object getScalingRuleAris() {
            return this.scalingRuleAris;
        }

        @Override
        public final java.lang.Number getScalingRuleArisExecuteVersion() {
            return this.scalingRuleArisExecuteVersion;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("scalingGroupId", om.valueToTree(this.getScalingGroupId()));
            if (this.getInstanceIds() != null) {
                data.set("instanceIds", om.valueToTree(this.getInstanceIds()));
            }
            if (this.getRemoveInstanceIds() != null) {
                data.set("removeInstanceIds", om.valueToTree(this.getRemoveInstanceIds()));
            }
            if (this.getScalingConfigurationId() != null) {
                data.set("scalingConfigurationId", om.valueToTree(this.getScalingConfigurationId()));
            }
            if (this.getScalingRuleAris() != null) {
                data.set("scalingRuleAris", om.valueToTree(this.getScalingRuleAris()));
            }
            if (this.getScalingRuleArisExecuteVersion() != null) {
                data.set("scalingRuleArisExecuteVersion", om.valueToTree(this.getScalingRuleArisExecuteVersion()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.ScalingGroupEnableProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ScalingGroupEnableProps.Jsii$Proxy that = (ScalingGroupEnableProps.Jsii$Proxy) o;

            if (!scalingGroupId.equals(that.scalingGroupId)) return false;
            if (this.instanceIds != null ? !this.instanceIds.equals(that.instanceIds) : that.instanceIds != null) return false;
            if (this.removeInstanceIds != null ? !this.removeInstanceIds.equals(that.removeInstanceIds) : that.removeInstanceIds != null) return false;
            if (this.scalingConfigurationId != null ? !this.scalingConfigurationId.equals(that.scalingConfigurationId) : that.scalingConfigurationId != null) return false;
            if (this.scalingRuleAris != null ? !this.scalingRuleAris.equals(that.scalingRuleAris) : that.scalingRuleAris != null) return false;
            return this.scalingRuleArisExecuteVersion != null ? this.scalingRuleArisExecuteVersion.equals(that.scalingRuleArisExecuteVersion) : that.scalingRuleArisExecuteVersion == null;
        }

        @Override
        public final int hashCode() {
            int result = this.scalingGroupId.hashCode();
            result = 31 * result + (this.instanceIds != null ? this.instanceIds.hashCode() : 0);
            result = 31 * result + (this.removeInstanceIds != null ? this.removeInstanceIds.hashCode() : 0);
            result = 31 * result + (this.scalingConfigurationId != null ? this.scalingConfigurationId.hashCode() : 0);
            result = 31 * result + (this.scalingRuleAris != null ? this.scalingRuleAris.hashCode() : 0);
            result = 31 * result + (this.scalingRuleArisExecuteVersion != null ? this.scalingRuleArisExecuteVersion.hashCode() : 0);
            return result;
        }
    }
}
