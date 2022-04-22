package com.aliyun.ros.cdk.ros;

/**
 * Properties for defining a `ALIYUN::ROS::ResourceCleaner`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.57.0 (build f614666)", date = "2022-04-22T03:34:41.469Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.RosResourceCleanerProps")
@software.amazon.jsii.Jsii.Proxy(RosResourceCleanerProps.Jsii$Proxy.class)
public interface RosResourceCleanerProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAction();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCleanUpRetryCount() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCleanUpTimeout() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExcludedResources() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFailureOption() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceFilters() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosResourceCleanerProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosResourceCleanerProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosResourceCleanerProps> {
        java.lang.Object action;
        java.lang.Object cleanUpRetryCount;
        java.lang.Object cleanUpTimeout;
        java.lang.Object excludedResources;
        java.lang.Object failureOption;
        java.lang.Object resourceFilters;

        /**
         * Sets the value of {@link RosResourceCleanerProps#getAction}
         * @param action the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder action(java.lang.String action) {
            this.action = action;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceCleanerProps#getAction}
         * @param action the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder action(com.aliyun.ros.cdk.core.IResolvable action) {
            this.action = action;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceCleanerProps#getCleanUpRetryCount}
         * @param cleanUpRetryCount the value to be set.
         * @return {@code this}
         */
        public Builder cleanUpRetryCount(java.lang.Number cleanUpRetryCount) {
            this.cleanUpRetryCount = cleanUpRetryCount;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceCleanerProps#getCleanUpRetryCount}
         * @param cleanUpRetryCount the value to be set.
         * @return {@code this}
         */
        public Builder cleanUpRetryCount(com.aliyun.ros.cdk.core.IResolvable cleanUpRetryCount) {
            this.cleanUpRetryCount = cleanUpRetryCount;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceCleanerProps#getCleanUpTimeout}
         * @param cleanUpTimeout the value to be set.
         * @return {@code this}
         */
        public Builder cleanUpTimeout(java.lang.Number cleanUpTimeout) {
            this.cleanUpTimeout = cleanUpTimeout;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceCleanerProps#getCleanUpTimeout}
         * @param cleanUpTimeout the value to be set.
         * @return {@code this}
         */
        public Builder cleanUpTimeout(com.aliyun.ros.cdk.core.IResolvable cleanUpTimeout) {
            this.cleanUpTimeout = cleanUpTimeout;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceCleanerProps#getExcludedResources}
         * @param excludedResources the value to be set.
         * @return {@code this}
         */
        public Builder excludedResources(com.aliyun.ros.cdk.core.IResolvable excludedResources) {
            this.excludedResources = excludedResources;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceCleanerProps#getExcludedResources}
         * @param excludedResources the value to be set.
         * @return {@code this}
         */
        public Builder excludedResources(java.util.List<? extends java.lang.Object> excludedResources) {
            this.excludedResources = excludedResources;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceCleanerProps#getFailureOption}
         * @param failureOption the value to be set.
         * @return {@code this}
         */
        public Builder failureOption(java.lang.String failureOption) {
            this.failureOption = failureOption;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceCleanerProps#getFailureOption}
         * @param failureOption the value to be set.
         * @return {@code this}
         */
        public Builder failureOption(com.aliyun.ros.cdk.core.IResolvable failureOption) {
            this.failureOption = failureOption;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceCleanerProps#getResourceFilters}
         * @param resourceFilters the value to be set.
         * @return {@code this}
         */
        public Builder resourceFilters(com.aliyun.ros.cdk.core.IResolvable resourceFilters) {
            this.resourceFilters = resourceFilters;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceCleanerProps#getResourceFilters}
         * @param resourceFilters the value to be set.
         * @return {@code this}
         */
        public Builder resourceFilters(java.util.List<? extends java.lang.Object> resourceFilters) {
            this.resourceFilters = resourceFilters;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosResourceCleanerProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosResourceCleanerProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosResourceCleanerProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosResourceCleanerProps {
        private final java.lang.Object action;
        private final java.lang.Object cleanUpRetryCount;
        private final java.lang.Object cleanUpTimeout;
        private final java.lang.Object excludedResources;
        private final java.lang.Object failureOption;
        private final java.lang.Object resourceFilters;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.action = software.amazon.jsii.Kernel.get(this, "action", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cleanUpRetryCount = software.amazon.jsii.Kernel.get(this, "cleanUpRetryCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cleanUpTimeout = software.amazon.jsii.Kernel.get(this, "cleanUpTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.excludedResources = software.amazon.jsii.Kernel.get(this, "excludedResources", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.failureOption = software.amazon.jsii.Kernel.get(this, "failureOption", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceFilters = software.amazon.jsii.Kernel.get(this, "resourceFilters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.action = java.util.Objects.requireNonNull(builder.action, "action is required");
            this.cleanUpRetryCount = builder.cleanUpRetryCount;
            this.cleanUpTimeout = builder.cleanUpTimeout;
            this.excludedResources = builder.excludedResources;
            this.failureOption = builder.failureOption;
            this.resourceFilters = builder.resourceFilters;
        }

        @Override
        public final java.lang.Object getAction() {
            return this.action;
        }

        @Override
        public final java.lang.Object getCleanUpRetryCount() {
            return this.cleanUpRetryCount;
        }

        @Override
        public final java.lang.Object getCleanUpTimeout() {
            return this.cleanUpTimeout;
        }

        @Override
        public final java.lang.Object getExcludedResources() {
            return this.excludedResources;
        }

        @Override
        public final java.lang.Object getFailureOption() {
            return this.failureOption;
        }

        @Override
        public final java.lang.Object getResourceFilters() {
            return this.resourceFilters;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("action", om.valueToTree(this.getAction()));
            if (this.getCleanUpRetryCount() != null) {
                data.set("cleanUpRetryCount", om.valueToTree(this.getCleanUpRetryCount()));
            }
            if (this.getCleanUpTimeout() != null) {
                data.set("cleanUpTimeout", om.valueToTree(this.getCleanUpTimeout()));
            }
            if (this.getExcludedResources() != null) {
                data.set("excludedResources", om.valueToTree(this.getExcludedResources()));
            }
            if (this.getFailureOption() != null) {
                data.set("failureOption", om.valueToTree(this.getFailureOption()));
            }
            if (this.getResourceFilters() != null) {
                data.set("resourceFilters", om.valueToTree(this.getResourceFilters()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ros.RosResourceCleanerProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosResourceCleanerProps.Jsii$Proxy that = (RosResourceCleanerProps.Jsii$Proxy) o;

            if (!action.equals(that.action)) return false;
            if (this.cleanUpRetryCount != null ? !this.cleanUpRetryCount.equals(that.cleanUpRetryCount) : that.cleanUpRetryCount != null) return false;
            if (this.cleanUpTimeout != null ? !this.cleanUpTimeout.equals(that.cleanUpTimeout) : that.cleanUpTimeout != null) return false;
            if (this.excludedResources != null ? !this.excludedResources.equals(that.excludedResources) : that.excludedResources != null) return false;
            if (this.failureOption != null ? !this.failureOption.equals(that.failureOption) : that.failureOption != null) return false;
            return this.resourceFilters != null ? this.resourceFilters.equals(that.resourceFilters) : that.resourceFilters == null;
        }

        @Override
        public final int hashCode() {
            int result = this.action.hashCode();
            result = 31 * result + (this.cleanUpRetryCount != null ? this.cleanUpRetryCount.hashCode() : 0);
            result = 31 * result + (this.cleanUpTimeout != null ? this.cleanUpTimeout.hashCode() : 0);
            result = 31 * result + (this.excludedResources != null ? this.excludedResources.hashCode() : 0);
            result = 31 * result + (this.failureOption != null ? this.failureOption.hashCode() : 0);
            result = 31 * result + (this.resourceFilters != null ? this.resourceFilters.hashCode() : 0);
            return result;
        }
    }
}
