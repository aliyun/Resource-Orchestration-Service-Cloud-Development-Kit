package com.aliyun.ros.cdk.ess.datasource;

/**
 * Properties for defining a <code>ScalingConfigurations</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingconfigurations
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:16.848Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.datasource.ScalingConfigurationsProps")
@software.amazon.jsii.Jsii.Proxy(ScalingConfigurationsProps.Jsii$Proxy.class)
public interface ScalingConfigurationsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
     * <li>Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * Property scalingConfigurationIds: The ID of scaling configuration that you want to query.
     * <p>
     * Valid values : 1 to 10. The IDs of active and inactive scaling configurations are displayed in the query results, and can be differentiated by LifecycleState.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScalingConfigurationIds() {
        return null;
    }

    /**
     * Property scalingConfigurationNames: The name of scaling configuration that you want to query.
     * <p>
     * Valid values : 1 to 10. The names of inactive scaling configurations are not displayed in the query results, and no error is reported.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScalingConfigurationNames() {
        return null;
    }

    /**
     * Property scalingGroupId: The ID of the scaling group.
     * <p>
     * You can use the ID to query all scaling configurations in the scaling group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScalingGroupId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ScalingConfigurationsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ScalingConfigurationsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ScalingConfigurationsProps> {
        java.lang.Object refreshOptions;
        java.lang.Object scalingConfigurationIds;
        java.lang.Object scalingConfigurationNames;
        java.lang.Object scalingGroupId;

        /**
         * Sets the value of {@link ScalingConfigurationsProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationsProps#getRefreshOptions}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         *                       Valid values:
         *                       <p>
         *                       <ul>
         *                       <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         *                       <li>Always: Always refresh the datasource resource when the stack is updated.
         *                       Default is Never.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationsProps#getScalingConfigurationIds}
         * @param scalingConfigurationIds Property scalingConfigurationIds: The ID of scaling configuration that you want to query.
         *                                Valid values : 1 to 10. The IDs of active and inactive scaling configurations are displayed in the query results, and can be differentiated by LifecycleState.
         * @return {@code this}
         */
        public Builder scalingConfigurationIds(com.aliyun.ros.cdk.core.IResolvable scalingConfigurationIds) {
            this.scalingConfigurationIds = scalingConfigurationIds;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationsProps#getScalingConfigurationIds}
         * @param scalingConfigurationIds Property scalingConfigurationIds: The ID of scaling configuration that you want to query.
         *                                Valid values : 1 to 10. The IDs of active and inactive scaling configurations are displayed in the query results, and can be differentiated by LifecycleState.
         * @return {@code this}
         */
        public Builder scalingConfigurationIds(java.util.List<? extends java.lang.Object> scalingConfigurationIds) {
            this.scalingConfigurationIds = scalingConfigurationIds;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationsProps#getScalingConfigurationNames}
         * @param scalingConfigurationNames Property scalingConfigurationNames: The name of scaling configuration that you want to query.
         *                                  Valid values : 1 to 10. The names of inactive scaling configurations are not displayed in the query results, and no error is reported.
         * @return {@code this}
         */
        public Builder scalingConfigurationNames(com.aliyun.ros.cdk.core.IResolvable scalingConfigurationNames) {
            this.scalingConfigurationNames = scalingConfigurationNames;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationsProps#getScalingConfigurationNames}
         * @param scalingConfigurationNames Property scalingConfigurationNames: The name of scaling configuration that you want to query.
         *                                  Valid values : 1 to 10. The names of inactive scaling configurations are not displayed in the query results, and no error is reported.
         * @return {@code this}
         */
        public Builder scalingConfigurationNames(java.util.List<? extends java.lang.Object> scalingConfigurationNames) {
            this.scalingConfigurationNames = scalingConfigurationNames;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationsProps#getScalingGroupId}
         * @param scalingGroupId Property scalingGroupId: The ID of the scaling group.
         *                       You can use the ID to query all scaling configurations in the scaling group.
         * @return {@code this}
         */
        public Builder scalingGroupId(java.lang.String scalingGroupId) {
            this.scalingGroupId = scalingGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ScalingConfigurationsProps#getScalingGroupId}
         * @param scalingGroupId Property scalingGroupId: The ID of the scaling group.
         *                       You can use the ID to query all scaling configurations in the scaling group.
         * @return {@code this}
         */
        public Builder scalingGroupId(com.aliyun.ros.cdk.core.IResolvable scalingGroupId) {
            this.scalingGroupId = scalingGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ScalingConfigurationsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ScalingConfigurationsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ScalingConfigurationsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ScalingConfigurationsProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.datasource.ScalingConfigurationsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ScalingConfigurationsProps.Jsii$Proxy that = (ScalingConfigurationsProps.Jsii$Proxy) o;

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
