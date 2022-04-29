package com.aliyun.ros.cdk.ros;

/**
 * Properties for defining a `ALIYUN::ROS::ResourceCleaner`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.57.0 (build f614666)", date = "2022-04-29T01:47:30.262Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.ResourceCleanerProps")
@software.amazon.jsii.Jsii.Proxy(ResourceCleanerProps.Jsii$Proxy.class)
public interface ResourceCleanerProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property action: Resource cleaner actions: - Scan: Scanning phase.
     * <p>
     * Scan out the resources to be cleaned up.
     * <p>
     * <ul>
     * <li>CleanUp: Cleanup phase. Clean up the scanned resources. It it not allowed for resource creation.</li>
     * <li>Scan+CleanUp: Scan first, then CleanUp.</li>
     * <li>ScanWhenCreatingAndUpdating+CleanUpWhenDeleting: Scan when creating or updating resource, and CleanUp when deleting resource.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAction();

    /**
     * Property cleanUpRetryCount: The maximum number of executions of cleanup phase.
     * <p>
     * Default to 1, which means no retry.
     * Conditions that trigger a retry: (the relationship is or)
     * 1.There are resources which fail to be cleaned up.
     * 2.The cleanup is timeout.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCleanUpRetryCount() {
        return null;
    }

    /**
     * Property cleanUpTimeout: The timeout seconds of executions of cleanup phase.
     * <p>
     * Default to 1 hour.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCleanUpTimeout() {
        return null;
    }

    /**
     * Property excludedResources: Exclude parts from resources to be cleaned up.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExcludedResources() {
        return null;
    }

    /**
     * Property failureOption: The failure option of cleanup phase: - Normal: Resource failure does not affect the resources that depend on it.
     * <p>
     * <ul>
     * <li>Fast: Resource failure causes all resources that depend on it to fail.
     * Default to Normal.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFailureOption() {
        return null;
    }

    /**
     * Property resourceFilters: Resource filters that ResourceCleaner uses to filter out the resources to be cleaned up during scanning.
     * <p>
     * There are two filtering behaviors(Effect): Allow and Deny. The filters work as below:
     * 1.Any resource denied by any Deny filter will not be cleaned up.
     * 2.If there is not any Allow filter, all resources not denied by any Deny filter will be cleaned up.
     * 3.If there are some Allow filters, only resources allowed by some Allow filter and not denied by any Deny filter will be cleaned up.
     * If filters are changed during resource update, ResourceCleaner requires to rescan. And if Action equals CleanUp, an error occurs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceFilters() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ResourceCleanerProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ResourceCleanerProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ResourceCleanerProps> {
        java.lang.Object action;
        java.lang.Object cleanUpRetryCount;
        java.lang.Object cleanUpTimeout;
        java.lang.Object excludedResources;
        java.lang.Object failureOption;
        java.lang.Object resourceFilters;

        /**
         * Sets the value of {@link ResourceCleanerProps#getAction}
         * @param action Property action: Resource cleaner actions: - Scan: Scanning phase. This parameter is required.
         *               Scan out the resources to be cleaned up.
         *               <p>
         *               <ul>
         *               <li>CleanUp: Cleanup phase. Clean up the scanned resources. It it not allowed for resource creation.</li>
         *               <li>Scan+CleanUp: Scan first, then CleanUp.</li>
         *               <li>ScanWhenCreatingAndUpdating+CleanUpWhenDeleting: Scan when creating or updating resource, and CleanUp when deleting resource.</li>
         *               </ul>
         * @return {@code this}
         */
        public Builder action(java.lang.String action) {
            this.action = action;
            return this;
        }

        /**
         * Sets the value of {@link ResourceCleanerProps#getAction}
         * @param action Property action: Resource cleaner actions: - Scan: Scanning phase. This parameter is required.
         *               Scan out the resources to be cleaned up.
         *               <p>
         *               <ul>
         *               <li>CleanUp: Cleanup phase. Clean up the scanned resources. It it not allowed for resource creation.</li>
         *               <li>Scan+CleanUp: Scan first, then CleanUp.</li>
         *               <li>ScanWhenCreatingAndUpdating+CleanUpWhenDeleting: Scan when creating or updating resource, and CleanUp when deleting resource.</li>
         *               </ul>
         * @return {@code this}
         */
        public Builder action(com.aliyun.ros.cdk.core.IResolvable action) {
            this.action = action;
            return this;
        }

        /**
         * Sets the value of {@link ResourceCleanerProps#getCleanUpRetryCount}
         * @param cleanUpRetryCount Property cleanUpRetryCount: The maximum number of executions of cleanup phase.
         *                          Default to 1, which means no retry.
         *                          Conditions that trigger a retry: (the relationship is or)
         *                          1.There are resources which fail to be cleaned up.
         *                          2.The cleanup is timeout.
         * @return {@code this}
         */
        public Builder cleanUpRetryCount(java.lang.Number cleanUpRetryCount) {
            this.cleanUpRetryCount = cleanUpRetryCount;
            return this;
        }

        /**
         * Sets the value of {@link ResourceCleanerProps#getCleanUpRetryCount}
         * @param cleanUpRetryCount Property cleanUpRetryCount: The maximum number of executions of cleanup phase.
         *                          Default to 1, which means no retry.
         *                          Conditions that trigger a retry: (the relationship is or)
         *                          1.There are resources which fail to be cleaned up.
         *                          2.The cleanup is timeout.
         * @return {@code this}
         */
        public Builder cleanUpRetryCount(com.aliyun.ros.cdk.core.IResolvable cleanUpRetryCount) {
            this.cleanUpRetryCount = cleanUpRetryCount;
            return this;
        }

        /**
         * Sets the value of {@link ResourceCleanerProps#getCleanUpTimeout}
         * @param cleanUpTimeout Property cleanUpTimeout: The timeout seconds of executions of cleanup phase.
         *                       Default to 1 hour.
         * @return {@code this}
         */
        public Builder cleanUpTimeout(java.lang.Number cleanUpTimeout) {
            this.cleanUpTimeout = cleanUpTimeout;
            return this;
        }

        /**
         * Sets the value of {@link ResourceCleanerProps#getCleanUpTimeout}
         * @param cleanUpTimeout Property cleanUpTimeout: The timeout seconds of executions of cleanup phase.
         *                       Default to 1 hour.
         * @return {@code this}
         */
        public Builder cleanUpTimeout(com.aliyun.ros.cdk.core.IResolvable cleanUpTimeout) {
            this.cleanUpTimeout = cleanUpTimeout;
            return this;
        }

        /**
         * Sets the value of {@link ResourceCleanerProps#getExcludedResources}
         * @param excludedResources Property excludedResources: Exclude parts from resources to be cleaned up.
         * @return {@code this}
         */
        public Builder excludedResources(com.aliyun.ros.cdk.core.IResolvable excludedResources) {
            this.excludedResources = excludedResources;
            return this;
        }

        /**
         * Sets the value of {@link ResourceCleanerProps#getExcludedResources}
         * @param excludedResources Property excludedResources: Exclude parts from resources to be cleaned up.
         * @return {@code this}
         */
        public Builder excludedResources(java.util.List<? extends java.lang.Object> excludedResources) {
            this.excludedResources = excludedResources;
            return this;
        }

        /**
         * Sets the value of {@link ResourceCleanerProps#getFailureOption}
         * @param failureOption Property failureOption: The failure option of cleanup phase: - Normal: Resource failure does not affect the resources that depend on it.
         *                      <ul>
         *                      <li>Fast: Resource failure causes all resources that depend on it to fail.
         *                      Default to Normal.</li>
         *                      </ul>
         * @return {@code this}
         */
        public Builder failureOption(java.lang.String failureOption) {
            this.failureOption = failureOption;
            return this;
        }

        /**
         * Sets the value of {@link ResourceCleanerProps#getFailureOption}
         * @param failureOption Property failureOption: The failure option of cleanup phase: - Normal: Resource failure does not affect the resources that depend on it.
         *                      <ul>
         *                      <li>Fast: Resource failure causes all resources that depend on it to fail.
         *                      Default to Normal.</li>
         *                      </ul>
         * @return {@code this}
         */
        public Builder failureOption(com.aliyun.ros.cdk.core.IResolvable failureOption) {
            this.failureOption = failureOption;
            return this;
        }

        /**
         * Sets the value of {@link ResourceCleanerProps#getResourceFilters}
         * @param resourceFilters Property resourceFilters: Resource filters that ResourceCleaner uses to filter out the resources to be cleaned up during scanning.
         *                        There are two filtering behaviors(Effect): Allow and Deny. The filters work as below:
         *                        1.Any resource denied by any Deny filter will not be cleaned up.
         *                        2.If there is not any Allow filter, all resources not denied by any Deny filter will be cleaned up.
         *                        3.If there are some Allow filters, only resources allowed by some Allow filter and not denied by any Deny filter will be cleaned up.
         *                        If filters are changed during resource update, ResourceCleaner requires to rescan. And if Action equals CleanUp, an error occurs.
         * @return {@code this}
         */
        public Builder resourceFilters(com.aliyun.ros.cdk.core.IResolvable resourceFilters) {
            this.resourceFilters = resourceFilters;
            return this;
        }

        /**
         * Sets the value of {@link ResourceCleanerProps#getResourceFilters}
         * @param resourceFilters Property resourceFilters: Resource filters that ResourceCleaner uses to filter out the resources to be cleaned up during scanning.
         *                        There are two filtering behaviors(Effect): Allow and Deny. The filters work as below:
         *                        1.Any resource denied by any Deny filter will not be cleaned up.
         *                        2.If there is not any Allow filter, all resources not denied by any Deny filter will be cleaned up.
         *                        3.If there are some Allow filters, only resources allowed by some Allow filter and not denied by any Deny filter will be cleaned up.
         *                        If filters are changed during resource update, ResourceCleaner requires to rescan. And if Action equals CleanUp, an error occurs.
         * @return {@code this}
         */
        public Builder resourceFilters(java.util.List<? extends java.lang.Object> resourceFilters) {
            this.resourceFilters = resourceFilters;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ResourceCleanerProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ResourceCleanerProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ResourceCleanerProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ResourceCleanerProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ros.ResourceCleanerProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ResourceCleanerProps.Jsii$Proxy that = (ResourceCleanerProps.Jsii$Proxy) o;

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
