package com.aliyun.ros.cdk.ess;

/**
 * Properties for defining a <code>RosScalingGroupEnable</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-scalinggroupenable
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:16.709Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.RosScalingGroupEnableProps")
@software.amazon.jsii.Jsii.Proxy(RosScalingGroupEnableProps.Jsii$Proxy.class)
public interface RosScalingGroupEnableProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getScalingGroupId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAttachOptions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDetachOptions() {
        return null;
    }

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
    default @org.jetbrains.annotations.Nullable java.lang.Object getScalingConfigurationId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScalingRuleAris() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScalingRuleArisExecuteVersion() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosScalingGroupEnableProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosScalingGroupEnableProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosScalingGroupEnableProps> {
        java.lang.Object scalingGroupId;
        java.lang.Object attachOptions;
        java.lang.Object detachOptions;
        java.lang.Object instanceIds;
        java.lang.Object removeInstanceIds;
        java.lang.Object scalingConfigurationId;
        java.lang.Object scalingRuleAris;
        java.lang.Object scalingRuleArisExecuteVersion;

        /**
         * Sets the value of {@link RosScalingGroupEnableProps#getScalingGroupId}
         * @param scalingGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder scalingGroupId(java.lang.String scalingGroupId) {
            this.scalingGroupId = scalingGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupEnableProps#getScalingGroupId}
         * @param scalingGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder scalingGroupId(com.aliyun.ros.cdk.core.IResolvable scalingGroupId) {
            this.scalingGroupId = scalingGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupEnableProps#getAttachOptions}
         * @param attachOptions the value to be set.
         * @return {@code this}
         */
        public Builder attachOptions(com.aliyun.ros.cdk.core.IResolvable attachOptions) {
            this.attachOptions = attachOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupEnableProps#getAttachOptions}
         * @param attachOptions the value to be set.
         * @return {@code this}
         */
        public Builder attachOptions(com.aliyun.ros.cdk.ess.RosScalingGroupEnable.AttachOptionsProperty attachOptions) {
            this.attachOptions = attachOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupEnableProps#getDetachOptions}
         * @param detachOptions the value to be set.
         * @return {@code this}
         */
        public Builder detachOptions(com.aliyun.ros.cdk.core.IResolvable detachOptions) {
            this.detachOptions = detachOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupEnableProps#getDetachOptions}
         * @param detachOptions the value to be set.
         * @return {@code this}
         */
        public Builder detachOptions(com.aliyun.ros.cdk.ess.RosScalingGroupEnable.DetachOptionsProperty detachOptions) {
            this.detachOptions = detachOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupEnableProps#getInstanceIds}
         * @param instanceIds the value to be set.
         * @return {@code this}
         */
        public Builder instanceIds(com.aliyun.ros.cdk.core.IResolvable instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupEnableProps#getInstanceIds}
         * @param instanceIds the value to be set.
         * @return {@code this}
         */
        public Builder instanceIds(java.util.List<? extends java.lang.Object> instanceIds) {
            this.instanceIds = instanceIds;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupEnableProps#getRemoveInstanceIds}
         * @param removeInstanceIds the value to be set.
         * @return {@code this}
         */
        public Builder removeInstanceIds(com.aliyun.ros.cdk.core.IResolvable removeInstanceIds) {
            this.removeInstanceIds = removeInstanceIds;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupEnableProps#getRemoveInstanceIds}
         * @param removeInstanceIds the value to be set.
         * @return {@code this}
         */
        public Builder removeInstanceIds(java.util.List<? extends java.lang.Object> removeInstanceIds) {
            this.removeInstanceIds = removeInstanceIds;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupEnableProps#getScalingConfigurationId}
         * @param scalingConfigurationId the value to be set.
         * @return {@code this}
         */
        public Builder scalingConfigurationId(java.lang.String scalingConfigurationId) {
            this.scalingConfigurationId = scalingConfigurationId;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupEnableProps#getScalingConfigurationId}
         * @param scalingConfigurationId the value to be set.
         * @return {@code this}
         */
        public Builder scalingConfigurationId(com.aliyun.ros.cdk.core.IResolvable scalingConfigurationId) {
            this.scalingConfigurationId = scalingConfigurationId;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupEnableProps#getScalingRuleAris}
         * @param scalingRuleAris the value to be set.
         * @return {@code this}
         */
        public Builder scalingRuleAris(com.aliyun.ros.cdk.core.IResolvable scalingRuleAris) {
            this.scalingRuleAris = scalingRuleAris;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupEnableProps#getScalingRuleAris}
         * @param scalingRuleAris the value to be set.
         * @return {@code this}
         */
        public Builder scalingRuleAris(java.util.List<? extends java.lang.Object> scalingRuleAris) {
            this.scalingRuleAris = scalingRuleAris;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupEnableProps#getScalingRuleArisExecuteVersion}
         * @param scalingRuleArisExecuteVersion the value to be set.
         * @return {@code this}
         */
        public Builder scalingRuleArisExecuteVersion(java.lang.Number scalingRuleArisExecuteVersion) {
            this.scalingRuleArisExecuteVersion = scalingRuleArisExecuteVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingGroupEnableProps#getScalingRuleArisExecuteVersion}
         * @param scalingRuleArisExecuteVersion the value to be set.
         * @return {@code this}
         */
        public Builder scalingRuleArisExecuteVersion(com.aliyun.ros.cdk.core.IResolvable scalingRuleArisExecuteVersion) {
            this.scalingRuleArisExecuteVersion = scalingRuleArisExecuteVersion;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosScalingGroupEnableProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosScalingGroupEnableProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosScalingGroupEnableProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosScalingGroupEnableProps {
        private final java.lang.Object scalingGroupId;
        private final java.lang.Object attachOptions;
        private final java.lang.Object detachOptions;
        private final java.lang.Object instanceIds;
        private final java.lang.Object removeInstanceIds;
        private final java.lang.Object scalingConfigurationId;
        private final java.lang.Object scalingRuleAris;
        private final java.lang.Object scalingRuleArisExecuteVersion;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.scalingGroupId = software.amazon.jsii.Kernel.get(this, "scalingGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.attachOptions = software.amazon.jsii.Kernel.get(this, "attachOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.detachOptions = software.amazon.jsii.Kernel.get(this, "detachOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceIds = software.amazon.jsii.Kernel.get(this, "instanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.removeInstanceIds = software.amazon.jsii.Kernel.get(this, "removeInstanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scalingConfigurationId = software.amazon.jsii.Kernel.get(this, "scalingConfigurationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scalingRuleAris = software.amazon.jsii.Kernel.get(this, "scalingRuleAris", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scalingRuleArisExecuteVersion = software.amazon.jsii.Kernel.get(this, "scalingRuleArisExecuteVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.scalingGroupId = java.util.Objects.requireNonNull(builder.scalingGroupId, "scalingGroupId is required");
            this.attachOptions = builder.attachOptions;
            this.detachOptions = builder.detachOptions;
            this.instanceIds = builder.instanceIds;
            this.removeInstanceIds = builder.removeInstanceIds;
            this.scalingConfigurationId = builder.scalingConfigurationId;
            this.scalingRuleAris = builder.scalingRuleAris;
            this.scalingRuleArisExecuteVersion = builder.scalingRuleArisExecuteVersion;
        }

        @Override
        public final java.lang.Object getScalingGroupId() {
            return this.scalingGroupId;
        }

        @Override
        public final java.lang.Object getAttachOptions() {
            return this.attachOptions;
        }

        @Override
        public final java.lang.Object getDetachOptions() {
            return this.detachOptions;
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
        public final java.lang.Object getScalingConfigurationId() {
            return this.scalingConfigurationId;
        }

        @Override
        public final java.lang.Object getScalingRuleAris() {
            return this.scalingRuleAris;
        }

        @Override
        public final java.lang.Object getScalingRuleArisExecuteVersion() {
            return this.scalingRuleArisExecuteVersion;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("scalingGroupId", om.valueToTree(this.getScalingGroupId()));
            if (this.getAttachOptions() != null) {
                data.set("attachOptions", om.valueToTree(this.getAttachOptions()));
            }
            if (this.getDetachOptions() != null) {
                data.set("detachOptions", om.valueToTree(this.getDetachOptions()));
            }
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.RosScalingGroupEnableProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosScalingGroupEnableProps.Jsii$Proxy that = (RosScalingGroupEnableProps.Jsii$Proxy) o;

            if (!scalingGroupId.equals(that.scalingGroupId)) return false;
            if (this.attachOptions != null ? !this.attachOptions.equals(that.attachOptions) : that.attachOptions != null) return false;
            if (this.detachOptions != null ? !this.detachOptions.equals(that.detachOptions) : that.detachOptions != null) return false;
            if (this.instanceIds != null ? !this.instanceIds.equals(that.instanceIds) : that.instanceIds != null) return false;
            if (this.removeInstanceIds != null ? !this.removeInstanceIds.equals(that.removeInstanceIds) : that.removeInstanceIds != null) return false;
            if (this.scalingConfigurationId != null ? !this.scalingConfigurationId.equals(that.scalingConfigurationId) : that.scalingConfigurationId != null) return false;
            if (this.scalingRuleAris != null ? !this.scalingRuleAris.equals(that.scalingRuleAris) : that.scalingRuleAris != null) return false;
            return this.scalingRuleArisExecuteVersion != null ? this.scalingRuleArisExecuteVersion.equals(that.scalingRuleArisExecuteVersion) : that.scalingRuleArisExecuteVersion == null;
        }

        @Override
        public final int hashCode() {
            int result = this.scalingGroupId.hashCode();
            result = 31 * result + (this.attachOptions != null ? this.attachOptions.hashCode() : 0);
            result = 31 * result + (this.detachOptions != null ? this.detachOptions.hashCode() : 0);
            result = 31 * result + (this.instanceIds != null ? this.instanceIds.hashCode() : 0);
            result = 31 * result + (this.removeInstanceIds != null ? this.removeInstanceIds.hashCode() : 0);
            result = 31 * result + (this.scalingConfigurationId != null ? this.scalingConfigurationId.hashCode() : 0);
            result = 31 * result + (this.scalingRuleAris != null ? this.scalingRuleAris.hashCode() : 0);
            result = 31 * result + (this.scalingRuleArisExecuteVersion != null ? this.scalingRuleArisExecuteVersion.hashCode() : 0);
            return result;
        }
    }
}
