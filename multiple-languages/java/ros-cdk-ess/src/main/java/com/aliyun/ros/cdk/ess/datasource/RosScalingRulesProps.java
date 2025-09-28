package com.aliyun.ros.cdk.ess.datasource;

/**
 * Properties for defining a <code>RosScalingRules</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ess-scalingrules
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:25.863Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.datasource.RosScalingRulesProps")
@software.amazon.jsii.Jsii.Proxy(RosScalingRulesProps.Jsii$Proxy.class)
public interface RosScalingRulesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScalingGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScalingRuleAris() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScalingRuleIds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScalingRuleNames() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScalingRuleType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getShowAlarmRules() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosScalingRulesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosScalingRulesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosScalingRulesProps> {
        java.lang.Object refreshOptions;
        java.lang.Object scalingGroupId;
        java.lang.Object scalingRuleAris;
        java.lang.Object scalingRuleIds;
        java.lang.Object scalingRuleNames;
        java.lang.Object scalingRuleType;
        java.lang.Object showAlarmRules;

        /**
         * Sets the value of {@link RosScalingRulesProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRulesProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRulesProps#getScalingGroupId}
         * @param scalingGroupId the value to be set.
         * @return {@code this}
         */
        public Builder scalingGroupId(java.lang.String scalingGroupId) {
            this.scalingGroupId = scalingGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRulesProps#getScalingGroupId}
         * @param scalingGroupId the value to be set.
         * @return {@code this}
         */
        public Builder scalingGroupId(com.aliyun.ros.cdk.core.IResolvable scalingGroupId) {
            this.scalingGroupId = scalingGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRulesProps#getScalingRuleAris}
         * @param scalingRuleAris the value to be set.
         * @return {@code this}
         */
        public Builder scalingRuleAris(java.util.List<? extends java.lang.Object> scalingRuleAris) {
            this.scalingRuleAris = scalingRuleAris;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRulesProps#getScalingRuleAris}
         * @param scalingRuleAris the value to be set.
         * @return {@code this}
         */
        public Builder scalingRuleAris(com.aliyun.ros.cdk.core.IResolvable scalingRuleAris) {
            this.scalingRuleAris = scalingRuleAris;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRulesProps#getScalingRuleIds}
         * @param scalingRuleIds the value to be set.
         * @return {@code this}
         */
        public Builder scalingRuleIds(java.util.List<? extends java.lang.Object> scalingRuleIds) {
            this.scalingRuleIds = scalingRuleIds;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRulesProps#getScalingRuleIds}
         * @param scalingRuleIds the value to be set.
         * @return {@code this}
         */
        public Builder scalingRuleIds(com.aliyun.ros.cdk.core.IResolvable scalingRuleIds) {
            this.scalingRuleIds = scalingRuleIds;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRulesProps#getScalingRuleNames}
         * @param scalingRuleNames the value to be set.
         * @return {@code this}
         */
        public Builder scalingRuleNames(java.util.List<? extends java.lang.Object> scalingRuleNames) {
            this.scalingRuleNames = scalingRuleNames;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRulesProps#getScalingRuleNames}
         * @param scalingRuleNames the value to be set.
         * @return {@code this}
         */
        public Builder scalingRuleNames(com.aliyun.ros.cdk.core.IResolvable scalingRuleNames) {
            this.scalingRuleNames = scalingRuleNames;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRulesProps#getScalingRuleType}
         * @param scalingRuleType the value to be set.
         * @return {@code this}
         */
        public Builder scalingRuleType(java.lang.String scalingRuleType) {
            this.scalingRuleType = scalingRuleType;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRulesProps#getScalingRuleType}
         * @param scalingRuleType the value to be set.
         * @return {@code this}
         */
        public Builder scalingRuleType(com.aliyun.ros.cdk.core.IResolvable scalingRuleType) {
            this.scalingRuleType = scalingRuleType;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRulesProps#getShowAlarmRules}
         * @param showAlarmRules the value to be set.
         * @return {@code this}
         */
        public Builder showAlarmRules(java.lang.Boolean showAlarmRules) {
            this.showAlarmRules = showAlarmRules;
            return this;
        }

        /**
         * Sets the value of {@link RosScalingRulesProps#getShowAlarmRules}
         * @param showAlarmRules the value to be set.
         * @return {@code this}
         */
        public Builder showAlarmRules(com.aliyun.ros.cdk.core.IResolvable showAlarmRules) {
            this.showAlarmRules = showAlarmRules;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosScalingRulesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosScalingRulesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosScalingRulesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosScalingRulesProps {
        private final java.lang.Object refreshOptions;
        private final java.lang.Object scalingGroupId;
        private final java.lang.Object scalingRuleAris;
        private final java.lang.Object scalingRuleIds;
        private final java.lang.Object scalingRuleNames;
        private final java.lang.Object scalingRuleType;
        private final java.lang.Object showAlarmRules;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scalingGroupId = software.amazon.jsii.Kernel.get(this, "scalingGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scalingRuleAris = software.amazon.jsii.Kernel.get(this, "scalingRuleAris", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scalingRuleIds = software.amazon.jsii.Kernel.get(this, "scalingRuleIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scalingRuleNames = software.amazon.jsii.Kernel.get(this, "scalingRuleNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scalingRuleType = software.amazon.jsii.Kernel.get(this, "scalingRuleType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.showAlarmRules = software.amazon.jsii.Kernel.get(this, "showAlarmRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.refreshOptions = builder.refreshOptions;
            this.scalingGroupId = builder.scalingGroupId;
            this.scalingRuleAris = builder.scalingRuleAris;
            this.scalingRuleIds = builder.scalingRuleIds;
            this.scalingRuleNames = builder.scalingRuleNames;
            this.scalingRuleType = builder.scalingRuleType;
            this.showAlarmRules = builder.showAlarmRules;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        public final java.lang.Object getScalingGroupId() {
            return this.scalingGroupId;
        }

        @Override
        public final java.lang.Object getScalingRuleAris() {
            return this.scalingRuleAris;
        }

        @Override
        public final java.lang.Object getScalingRuleIds() {
            return this.scalingRuleIds;
        }

        @Override
        public final java.lang.Object getScalingRuleNames() {
            return this.scalingRuleNames;
        }

        @Override
        public final java.lang.Object getScalingRuleType() {
            return this.scalingRuleType;
        }

        @Override
        public final java.lang.Object getShowAlarmRules() {
            return this.showAlarmRules;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }
            if (this.getScalingGroupId() != null) {
                data.set("scalingGroupId", om.valueToTree(this.getScalingGroupId()));
            }
            if (this.getScalingRuleAris() != null) {
                data.set("scalingRuleAris", om.valueToTree(this.getScalingRuleAris()));
            }
            if (this.getScalingRuleIds() != null) {
                data.set("scalingRuleIds", om.valueToTree(this.getScalingRuleIds()));
            }
            if (this.getScalingRuleNames() != null) {
                data.set("scalingRuleNames", om.valueToTree(this.getScalingRuleNames()));
            }
            if (this.getScalingRuleType() != null) {
                data.set("scalingRuleType", om.valueToTree(this.getScalingRuleType()));
            }
            if (this.getShowAlarmRules() != null) {
                data.set("showAlarmRules", om.valueToTree(this.getShowAlarmRules()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.datasource.RosScalingRulesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosScalingRulesProps.Jsii$Proxy that = (RosScalingRulesProps.Jsii$Proxy) o;

            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            if (this.scalingGroupId != null ? !this.scalingGroupId.equals(that.scalingGroupId) : that.scalingGroupId != null) return false;
            if (this.scalingRuleAris != null ? !this.scalingRuleAris.equals(that.scalingRuleAris) : that.scalingRuleAris != null) return false;
            if (this.scalingRuleIds != null ? !this.scalingRuleIds.equals(that.scalingRuleIds) : that.scalingRuleIds != null) return false;
            if (this.scalingRuleNames != null ? !this.scalingRuleNames.equals(that.scalingRuleNames) : that.scalingRuleNames != null) return false;
            if (this.scalingRuleType != null ? !this.scalingRuleType.equals(that.scalingRuleType) : that.scalingRuleType != null) return false;
            return this.showAlarmRules != null ? this.showAlarmRules.equals(that.showAlarmRules) : that.showAlarmRules == null;
        }

        @Override
        public final int hashCode() {
            int result = this.refreshOptions != null ? this.refreshOptions.hashCode() : 0;
            result = 31 * result + (this.scalingGroupId != null ? this.scalingGroupId.hashCode() : 0);
            result = 31 * result + (this.scalingRuleAris != null ? this.scalingRuleAris.hashCode() : 0);
            result = 31 * result + (this.scalingRuleIds != null ? this.scalingRuleIds.hashCode() : 0);
            result = 31 * result + (this.scalingRuleNames != null ? this.scalingRuleNames.hashCode() : 0);
            result = 31 * result + (this.scalingRuleType != null ? this.scalingRuleType.hashCode() : 0);
            result = 31 * result + (this.showAlarmRules != null ? this.showAlarmRules.hashCode() : 0);
            return result;
        }
    }
}
