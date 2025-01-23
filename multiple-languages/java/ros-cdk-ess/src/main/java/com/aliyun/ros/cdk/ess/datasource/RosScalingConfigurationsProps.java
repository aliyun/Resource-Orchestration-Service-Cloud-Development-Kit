package com.aliyun.ros.cdk.ess.datasource;

/**
 * Properties for defining a <code>RosScalingConfigurations</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingconfigurations
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:40.064Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.datasource.RosScalingConfigurationsProps")
@software.amazon.jsii.Jsii.Proxy(RosScalingConfigurationsProps.Jsii$Proxy.class)
public interface RosScalingConfigurationsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScalingConfigurationIds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScalingConfigurationNames() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScalingGroupId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosScalingConfigurationsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosScalingConfigurationsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosScalingConfigurationsProps> {
        java.lang.Object refreshOptions;
        java.lang.Object scalingConfigurationIds;
        java.lang.Object scalingConfigurationNames;
        java.lang.Object scalingGroupId;

        /**
         * Sets the value of {@link RosScalingConfigurationsProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationsProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationsProps#getScalingConfigurationIds}
         * @param scalingConfigurationIds the value to be set.
         * @return {@code this}
         */
        public Builder scalingConfigurationIds(com.aliyun.ros.cdk.core.IResolvable scalingConfigurationIds) {
            this.scalingConfigurationIds = scalingConfigurationIds;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationsProps#getScalingConfigurationIds}
         * @param scalingConfigurationIds the value to be set.
         * @return {@code this}
         */
        public Builder scalingConfigurationIds(java.util.List<? extends java.lang.Object> scalingConfigurationIds) {
            this.scalingConfigurationIds = scalingConfigurationIds;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationsProps#getScalingConfigurationNames}
         * @param scalingConfigurationNames the value to be set.
         * @return {@code this}
         */
        public Builder scalingConfigurationNames(com.aliyun.ros.cdk.core.IResolvable scalingConfigurationNames) {
            this.scalingConfigurationNames = scalingConfigurationNames;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationsProps#getScalingConfigurationNames}
         * @param scalingConfigurationNames the value to be set.
         * @return {@code this}
         */
        public Builder scalingConfigurationNames(java.util.List<? extends java.lang.Object> scalingConfigurationNames) {
            this.scalingConfigurationNames = scalingConfigurationNames;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationsProps#getScalingGroupId}
         * @param scalingGroupId the value to be set.
         * @return {@code this}
         */
        public Builder scalingGroupId(java.lang.String scalingGroupId) {
            this.scalingGroupId = scalingGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingConfigurationsProps#getScalingGroupId}
         * @param scalingGroupId the value to be set.
         * @return {@code this}
         */
        public Builder scalingGroupId(com.aliyun.ros.cdk.core.IResolvable scalingGroupId) {
            this.scalingGroupId = scalingGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosScalingConfigurationsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosScalingConfigurationsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosScalingConfigurationsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosScalingConfigurationsProps {
        private final java.lang.Object refreshOptions;
        private final java.lang.Object scalingConfigurationIds;
        private final java.lang.Object scalingConfigurationNames;
        private final java.lang.Object scalingGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scalingConfigurationIds = software.amazon.jsii.Kernel.get(this, "scalingConfigurationIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scalingConfigurationNames = software.amazon.jsii.Kernel.get(this, "scalingConfigurationNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scalingGroupId = software.amazon.jsii.Kernel.get(this, "scalingGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.refreshOptions = builder.refreshOptions;
            this.scalingConfigurationIds = builder.scalingConfigurationIds;
            this.scalingConfigurationNames = builder.scalingConfigurationNames;
            this.scalingGroupId = builder.scalingGroupId;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        public final java.lang.Object getScalingConfigurationIds() {
            return this.scalingConfigurationIds;
        }

        @Override
        public final java.lang.Object getScalingConfigurationNames() {
            return this.scalingConfigurationNames;
        }

        @Override
        public final java.lang.Object getScalingGroupId() {
            return this.scalingGroupId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }
            if (this.getScalingConfigurationIds() != null) {
                data.set("scalingConfigurationIds", om.valueToTree(this.getScalingConfigurationIds()));
            }
            if (this.getScalingConfigurationNames() != null) {
                data.set("scalingConfigurationNames", om.valueToTree(this.getScalingConfigurationNames()));
            }
            if (this.getScalingGroupId() != null) {
                data.set("scalingGroupId", om.valueToTree(this.getScalingGroupId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.datasource.RosScalingConfigurationsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosScalingConfigurationsProps.Jsii$Proxy that = (RosScalingConfigurationsProps.Jsii$Proxy) o;

            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            if (this.scalingConfigurationIds != null ? !this.scalingConfigurationIds.equals(that.scalingConfigurationIds) : that.scalingConfigurationIds != null) return false;
            if (this.scalingConfigurationNames != null ? !this.scalingConfigurationNames.equals(that.scalingConfigurationNames) : that.scalingConfigurationNames != null) return false;
            return this.scalingGroupId != null ? this.scalingGroupId.equals(that.scalingGroupId) : that.scalingGroupId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.refreshOptions != null ? this.refreshOptions.hashCode() : 0;
            result = 31 * result + (this.scalingConfigurationIds != null ? this.scalingConfigurationIds.hashCode() : 0);
            result = 31 * result + (this.scalingConfigurationNames != null ? this.scalingConfigurationNames.hashCode() : 0);
            result = 31 * result + (this.scalingGroupId != null ? this.scalingGroupId.hashCode() : 0);
            return result;
        }
    }
}
