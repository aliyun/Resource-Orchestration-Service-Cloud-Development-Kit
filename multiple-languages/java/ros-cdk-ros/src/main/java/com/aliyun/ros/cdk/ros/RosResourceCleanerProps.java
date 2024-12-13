package com.aliyun.ros.cdk.ros;

/**
 * Properties for defining a <code>RosResourceCleaner</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-resourcecleaner
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:11.487Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.RosResourceCleanerProps")
@software.amazon.jsii.Jsii.Proxy(RosResourceCleanerProps.Jsii$Proxy.class)
public interface RosResourceCleanerProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAction();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCleanUpAlgorithm() {
        return null;
    }

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
    default @org.jetbrains.annotations.Nullable java.lang.Object getDisabledSideEffects() {
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getMode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceFilters() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResources() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceTypeOrder() {
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
        java.lang.Object cleanUpAlgorithm;
        java.lang.Object cleanUpRetryCount;
        java.lang.Object cleanUpTimeout;
        java.lang.Object disabledSideEffects;
        java.lang.Object excludedResources;
        java.lang.Object failureOption;
        java.lang.Object mode;
        java.lang.Object resourceFilters;
        java.lang.Object resources;
        java.lang.Object resourceTypeOrder;

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
         * Sets the value of {@link RosResourceCleanerProps#getCleanUpAlgorithm}
         * @param cleanUpAlgorithm the value to be set.
         * @return {@code this}
         */
        public Builder cleanUpAlgorithm(java.lang.String cleanUpAlgorithm) {
            this.cleanUpAlgorithm = cleanUpAlgorithm;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceCleanerProps#getCleanUpAlgorithm}
         * @param cleanUpAlgorithm the value to be set.
         * @return {@code this}
         */
        public Builder cleanUpAlgorithm(com.aliyun.ros.cdk.core.IResolvable cleanUpAlgorithm) {
            this.cleanUpAlgorithm = cleanUpAlgorithm;
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
         * Sets the value of {@link RosResourceCleanerProps#getDisabledSideEffects}
         * @param disabledSideEffects the value to be set.
         * @return {@code this}
         */
        public Builder disabledSideEffects(com.aliyun.ros.cdk.core.IResolvable disabledSideEffects) {
            this.disabledSideEffects = disabledSideEffects;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceCleanerProps#getDisabledSideEffects}
         * @param disabledSideEffects the value to be set.
         * @return {@code this}
         */
        public Builder disabledSideEffects(java.util.List<? extends java.lang.Object> disabledSideEffects) {
            this.disabledSideEffects = disabledSideEffects;
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
         * Sets the value of {@link RosResourceCleanerProps#getMode}
         * @param mode the value to be set.
         * @return {@code this}
         */
        public Builder mode(java.lang.String mode) {
            this.mode = mode;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceCleanerProps#getMode}
         * @param mode the value to be set.
         * @return {@code this}
         */
        public Builder mode(com.aliyun.ros.cdk.core.IResolvable mode) {
            this.mode = mode;
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
         * Sets the value of {@link RosResourceCleanerProps#getResources}
         * @param resources the value to be set.
         * @return {@code this}
         */
        public Builder resources(com.aliyun.ros.cdk.core.IResolvable resources) {
            this.resources = resources;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceCleanerProps#getResources}
         * @param resources the value to be set.
         * @return {@code this}
         */
        public Builder resources(java.util.List<? extends java.lang.Object> resources) {
            this.resources = resources;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceCleanerProps#getResourceTypeOrder}
         * @param resourceTypeOrder the value to be set.
         * @return {@code this}
         */
        public Builder resourceTypeOrder(com.aliyun.ros.cdk.core.IResolvable resourceTypeOrder) {
            this.resourceTypeOrder = resourceTypeOrder;
            return this;
        }

        /**
         * Sets the value of {@link RosResourceCleanerProps#getResourceTypeOrder}
         * @param resourceTypeOrder the value to be set.
         * @return {@code this}
         */
        public Builder resourceTypeOrder(java.util.List<? extends java.lang.Object> resourceTypeOrder) {
            this.resourceTypeOrder = resourceTypeOrder;
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
        private final java.lang.Object cleanUpAlgorithm;
        private final java.lang.Object cleanUpRetryCount;
        private final java.lang.Object cleanUpTimeout;
        private final java.lang.Object disabledSideEffects;
        private final java.lang.Object excludedResources;
        private final java.lang.Object failureOption;
        private final java.lang.Object mode;
        private final java.lang.Object resourceFilters;
        private final java.lang.Object resources;
        private final java.lang.Object resourceTypeOrder;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.action = software.amazon.jsii.Kernel.get(this, "action", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cleanUpAlgorithm = software.amazon.jsii.Kernel.get(this, "cleanUpAlgorithm", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cleanUpRetryCount = software.amazon.jsii.Kernel.get(this, "cleanUpRetryCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cleanUpTimeout = software.amazon.jsii.Kernel.get(this, "cleanUpTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.disabledSideEffects = software.amazon.jsii.Kernel.get(this, "disabledSideEffects", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.excludedResources = software.amazon.jsii.Kernel.get(this, "excludedResources", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.failureOption = software.amazon.jsii.Kernel.get(this, "failureOption", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.mode = software.amazon.jsii.Kernel.get(this, "mode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceFilters = software.amazon.jsii.Kernel.get(this, "resourceFilters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resources = software.amazon.jsii.Kernel.get(this, "resources", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceTypeOrder = software.amazon.jsii.Kernel.get(this, "resourceTypeOrder", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.action = java.util.Objects.requireNonNull(builder.action, "action is required");
            this.cleanUpAlgorithm = builder.cleanUpAlgorithm;
            this.cleanUpRetryCount = builder.cleanUpRetryCount;
            this.cleanUpTimeout = builder.cleanUpTimeout;
            this.disabledSideEffects = builder.disabledSideEffects;
            this.excludedResources = builder.excludedResources;
            this.failureOption = builder.failureOption;
            this.mode = builder.mode;
            this.resourceFilters = builder.resourceFilters;
            this.resources = builder.resources;
            this.resourceTypeOrder = builder.resourceTypeOrder;
        }

        @Override
        public final java.lang.Object getAction() {
            return this.action;
        }

        @Override
        public final java.lang.Object getCleanUpAlgorithm() {
            return this.cleanUpAlgorithm;
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
        public final java.lang.Object getDisabledSideEffects() {
            return this.disabledSideEffects;
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
        public final java.lang.Object getMode() {
            return this.mode;
        }

        @Override
        public final java.lang.Object getResourceFilters() {
            return this.resourceFilters;
        }

        @Override
        public final java.lang.Object getResources() {
            return this.resources;
        }

        @Override
        public final java.lang.Object getResourceTypeOrder() {
            return this.resourceTypeOrder;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("action", om.valueToTree(this.getAction()));
            if (this.getCleanUpAlgorithm() != null) {
                data.set("cleanUpAlgorithm", om.valueToTree(this.getCleanUpAlgorithm()));
            }
            if (this.getCleanUpRetryCount() != null) {
                data.set("cleanUpRetryCount", om.valueToTree(this.getCleanUpRetryCount()));
            }
            if (this.getCleanUpTimeout() != null) {
                data.set("cleanUpTimeout", om.valueToTree(this.getCleanUpTimeout()));
            }
            if (this.getDisabledSideEffects() != null) {
                data.set("disabledSideEffects", om.valueToTree(this.getDisabledSideEffects()));
            }
            if (this.getExcludedResources() != null) {
                data.set("excludedResources", om.valueToTree(this.getExcludedResources()));
            }
            if (this.getFailureOption() != null) {
                data.set("failureOption", om.valueToTree(this.getFailureOption()));
            }
            if (this.getMode() != null) {
                data.set("mode", om.valueToTree(this.getMode()));
            }
            if (this.getResourceFilters() != null) {
                data.set("resourceFilters", om.valueToTree(this.getResourceFilters()));
            }
            if (this.getResources() != null) {
                data.set("resources", om.valueToTree(this.getResources()));
            }
            if (this.getResourceTypeOrder() != null) {
                data.set("resourceTypeOrder", om.valueToTree(this.getResourceTypeOrder()));
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
            if (this.cleanUpAlgorithm != null ? !this.cleanUpAlgorithm.equals(that.cleanUpAlgorithm) : that.cleanUpAlgorithm != null) return false;
            if (this.cleanUpRetryCount != null ? !this.cleanUpRetryCount.equals(that.cleanUpRetryCount) : that.cleanUpRetryCount != null) return false;
            if (this.cleanUpTimeout != null ? !this.cleanUpTimeout.equals(that.cleanUpTimeout) : that.cleanUpTimeout != null) return false;
            if (this.disabledSideEffects != null ? !this.disabledSideEffects.equals(that.disabledSideEffects) : that.disabledSideEffects != null) return false;
            if (this.excludedResources != null ? !this.excludedResources.equals(that.excludedResources) : that.excludedResources != null) return false;
            if (this.failureOption != null ? !this.failureOption.equals(that.failureOption) : that.failureOption != null) return false;
            if (this.mode != null ? !this.mode.equals(that.mode) : that.mode != null) return false;
            if (this.resourceFilters != null ? !this.resourceFilters.equals(that.resourceFilters) : that.resourceFilters != null) return false;
            if (this.resources != null ? !this.resources.equals(that.resources) : that.resources != null) return false;
            return this.resourceTypeOrder != null ? this.resourceTypeOrder.equals(that.resourceTypeOrder) : that.resourceTypeOrder == null;
        }

        @Override
        public final int hashCode() {
            int result = this.action.hashCode();
            result = 31 * result + (this.cleanUpAlgorithm != null ? this.cleanUpAlgorithm.hashCode() : 0);
            result = 31 * result + (this.cleanUpRetryCount != null ? this.cleanUpRetryCount.hashCode() : 0);
            result = 31 * result + (this.cleanUpTimeout != null ? this.cleanUpTimeout.hashCode() : 0);
            result = 31 * result + (this.disabledSideEffects != null ? this.disabledSideEffects.hashCode() : 0);
            result = 31 * result + (this.excludedResources != null ? this.excludedResources.hashCode() : 0);
            result = 31 * result + (this.failureOption != null ? this.failureOption.hashCode() : 0);
            result = 31 * result + (this.mode != null ? this.mode.hashCode() : 0);
            result = 31 * result + (this.resourceFilters != null ? this.resourceFilters.hashCode() : 0);
            result = 31 * result + (this.resources != null ? this.resources.hashCode() : 0);
            result = 31 * result + (this.resourceTypeOrder != null ? this.resourceTypeOrder.hashCode() : 0);
            return result;
        }
    }
}
