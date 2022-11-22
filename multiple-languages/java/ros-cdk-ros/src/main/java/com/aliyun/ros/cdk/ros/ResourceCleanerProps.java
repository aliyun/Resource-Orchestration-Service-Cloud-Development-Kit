package com.aliyun.ros.cdk.ros;

/**
 * Properties for defining a `ALIYUN::ROS::ResourceCleaner`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-22T06:16:30.211Z")
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
     * <li>ScanWhenCreatingAndUpdating+CleanUpWhenDeleting: Scan when creating or updating resource, and CleanUp when deleting stack.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAction();

    /**
     * Property cleanUpAlgorithm: The cleanup algorithm of cleanup phase: - ResourceDependency: Clean up by resource dependency tree.
     * <p>
     * <ul>
     * <li>ResourceTypeOrder: Clean up by resource type order. Property ResourceTypeOrder can be used to specify resource type order. If it is not specified, a default order will be used.
     * Default to ResourceDependency.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCleanUpAlgorithm() {
        return null;
    }

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
     * Property disabledSideEffects: Side effects to be disabled.
     * <p>
     * Cleaning up some resources will cause some side effects. If is not expected, use the property to disable them.
     * The side effects can be found in response(ResourceCleaner) of API GetFeatureDetails.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDisabledSideEffects() {
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
     * Property mode: The result mode of resource cleaner: - Strict: Any scanning or cleanup failure leads to the failure of the cleaner.
     * <p>
     * <ul>
     * <li>Loose: Only a little scanning and cleanup failures lead to the failure of the cleaner. Most scanning failures will be ignored, failure messages can be found in ScanErrors or ResourceDetails. Most cleanup failures will be ignored, failure messages can be found in ResourceDetails.
     * Default to Loose.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMode() {
        return null;
    }

    /**
     * Property resourceFilters: Resource filters that ResourceCleaner uses to filter out the resources to be cleaned up during scanning.
     * <p>
     * Only one of ResourceFilters and Resources can be specified.
     * There are two filtering behaviors(Effect): Allow and Deny. The filters work as below:
     * 1.Any resource denied by any Deny filter will not be cleaned up.
     * 2.Only resources allowed by some Allow filter and not denied by any Deny filter will be cleaned up.
     * If filters are changed during resource update, ResourceCleaner requires to rescan. And if Action equals CleanUp, an error occurs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceFilters() {
        return null;
    }

    /**
     * Property resources: Resources to be cleaned up.
     * <p>
     * Only one of Resources and ResourceFilters can be specified.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResources() {
        return null;
    }

    /**
     * Property resourceTypeOrder: This property takes effect only when property CleanUpAlgorithm is ResourceTypeOrder.
     * <p>
     * If it takes effect:
     * <p>
     * <ul>
     * <li>Resources will be cleaned up in order from front to back.</li>
     * <li>Resource with resource type not specified in this property will not be cleaned up.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceTypeOrder() {
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
         * Sets the value of {@link ResourceCleanerProps#getAction}
         * @param action Property action: Resource cleaner actions: - Scan: Scanning phase. This parameter is required.
         *               Scan out the resources to be cleaned up.
         *               <p>
         *               <ul>
         *               <li>CleanUp: Cleanup phase. Clean up the scanned resources. It it not allowed for resource creation.</li>
         *               <li>Scan+CleanUp: Scan first, then CleanUp.</li>
         *               <li>ScanWhenCreatingAndUpdating+CleanUpWhenDeleting: Scan when creating or updating resource, and CleanUp when deleting stack.</li>
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
         *               <li>ScanWhenCreatingAndUpdating+CleanUpWhenDeleting: Scan when creating or updating resource, and CleanUp when deleting stack.</li>
         *               </ul>
         * @return {@code this}
         */
        public Builder action(com.aliyun.ros.cdk.core.IResolvable action) {
            this.action = action;
            return this;
        }

        /**
         * Sets the value of {@link ResourceCleanerProps#getCleanUpAlgorithm}
         * @param cleanUpAlgorithm Property cleanUpAlgorithm: The cleanup algorithm of cleanup phase: - ResourceDependency: Clean up by resource dependency tree.
         *                         <ul>
         *                         <li>ResourceTypeOrder: Clean up by resource type order. Property ResourceTypeOrder can be used to specify resource type order. If it is not specified, a default order will be used.
         *                         Default to ResourceDependency.</li>
         *                         </ul>
         * @return {@code this}
         */
        public Builder cleanUpAlgorithm(java.lang.String cleanUpAlgorithm) {
            this.cleanUpAlgorithm = cleanUpAlgorithm;
            return this;
        }

        /**
         * Sets the value of {@link ResourceCleanerProps#getCleanUpAlgorithm}
         * @param cleanUpAlgorithm Property cleanUpAlgorithm: The cleanup algorithm of cleanup phase: - ResourceDependency: Clean up by resource dependency tree.
         *                         <ul>
         *                         <li>ResourceTypeOrder: Clean up by resource type order. Property ResourceTypeOrder can be used to specify resource type order. If it is not specified, a default order will be used.
         *                         Default to ResourceDependency.</li>
         *                         </ul>
         * @return {@code this}
         */
        public Builder cleanUpAlgorithm(com.aliyun.ros.cdk.core.IResolvable cleanUpAlgorithm) {
            this.cleanUpAlgorithm = cleanUpAlgorithm;
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
         * Sets the value of {@link ResourceCleanerProps#getDisabledSideEffects}
         * @param disabledSideEffects Property disabledSideEffects: Side effects to be disabled.
         *                            Cleaning up some resources will cause some side effects. If is not expected, use the property to disable them.
         *                            The side effects can be found in response(ResourceCleaner) of API GetFeatureDetails.
         * @return {@code this}
         */
        public Builder disabledSideEffects(com.aliyun.ros.cdk.core.IResolvable disabledSideEffects) {
            this.disabledSideEffects = disabledSideEffects;
            return this;
        }

        /**
         * Sets the value of {@link ResourceCleanerProps#getDisabledSideEffects}
         * @param disabledSideEffects Property disabledSideEffects: Side effects to be disabled.
         *                            Cleaning up some resources will cause some side effects. If is not expected, use the property to disable them.
         *                            The side effects can be found in response(ResourceCleaner) of API GetFeatureDetails.
         * @return {@code this}
         */
        public Builder disabledSideEffects(java.util.List<? extends java.lang.Object> disabledSideEffects) {
            this.disabledSideEffects = disabledSideEffects;
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
         * Sets the value of {@link ResourceCleanerProps#getMode}
         * @param mode Property mode: The result mode of resource cleaner: - Strict: Any scanning or cleanup failure leads to the failure of the cleaner.
         *             <ul>
         *             <li>Loose: Only a little scanning and cleanup failures lead to the failure of the cleaner. Most scanning failures will be ignored, failure messages can be found in ScanErrors or ResourceDetails. Most cleanup failures will be ignored, failure messages can be found in ResourceDetails.
         *             Default to Loose.</li>
         *             </ul>
         * @return {@code this}
         */
        public Builder mode(java.lang.String mode) {
            this.mode = mode;
            return this;
        }

        /**
         * Sets the value of {@link ResourceCleanerProps#getMode}
         * @param mode Property mode: The result mode of resource cleaner: - Strict: Any scanning or cleanup failure leads to the failure of the cleaner.
         *             <ul>
         *             <li>Loose: Only a little scanning and cleanup failures lead to the failure of the cleaner. Most scanning failures will be ignored, failure messages can be found in ScanErrors or ResourceDetails. Most cleanup failures will be ignored, failure messages can be found in ResourceDetails.
         *             Default to Loose.</li>
         *             </ul>
         * @return {@code this}
         */
        public Builder mode(com.aliyun.ros.cdk.core.IResolvable mode) {
            this.mode = mode;
            return this;
        }

        /**
         * Sets the value of {@link ResourceCleanerProps#getResourceFilters}
         * @param resourceFilters Property resourceFilters: Resource filters that ResourceCleaner uses to filter out the resources to be cleaned up during scanning.
         *                        Only one of ResourceFilters and Resources can be specified.
         *                        There are two filtering behaviors(Effect): Allow and Deny. The filters work as below:
         *                        1.Any resource denied by any Deny filter will not be cleaned up.
         *                        2.Only resources allowed by some Allow filter and not denied by any Deny filter will be cleaned up.
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
         *                        Only one of ResourceFilters and Resources can be specified.
         *                        There are two filtering behaviors(Effect): Allow and Deny. The filters work as below:
         *                        1.Any resource denied by any Deny filter will not be cleaned up.
         *                        2.Only resources allowed by some Allow filter and not denied by any Deny filter will be cleaned up.
         *                        If filters are changed during resource update, ResourceCleaner requires to rescan. And if Action equals CleanUp, an error occurs.
         * @return {@code this}
         */
        public Builder resourceFilters(java.util.List<? extends java.lang.Object> resourceFilters) {
            this.resourceFilters = resourceFilters;
            return this;
        }

        /**
         * Sets the value of {@link ResourceCleanerProps#getResources}
         * @param resources Property resources: Resources to be cleaned up.
         *                  Only one of Resources and ResourceFilters can be specified.
         * @return {@code this}
         */
        public Builder resources(com.aliyun.ros.cdk.core.IResolvable resources) {
            this.resources = resources;
            return this;
        }

        /**
         * Sets the value of {@link ResourceCleanerProps#getResources}
         * @param resources Property resources: Resources to be cleaned up.
         *                  Only one of Resources and ResourceFilters can be specified.
         * @return {@code this}
         */
        public Builder resources(java.util.List<? extends java.lang.Object> resources) {
            this.resources = resources;
            return this;
        }

        /**
         * Sets the value of {@link ResourceCleanerProps#getResourceTypeOrder}
         * @param resourceTypeOrder Property resourceTypeOrder: This property takes effect only when property CleanUpAlgorithm is ResourceTypeOrder.
         *                          If it takes effect:
         *                          <p>
         *                          <ul>
         *                          <li>Resources will be cleaned up in order from front to back.</li>
         *                          <li>Resource with resource type not specified in this property will not be cleaned up.</li>
         *                          </ul>
         * @return {@code this}
         */
        public Builder resourceTypeOrder(com.aliyun.ros.cdk.core.IResolvable resourceTypeOrder) {
            this.resourceTypeOrder = resourceTypeOrder;
            return this;
        }

        /**
         * Sets the value of {@link ResourceCleanerProps#getResourceTypeOrder}
         * @param resourceTypeOrder Property resourceTypeOrder: This property takes effect only when property CleanUpAlgorithm is ResourceTypeOrder.
         *                          If it takes effect:
         *                          <p>
         *                          <ul>
         *                          <li>Resources will be cleaned up in order from front to back.</li>
         *                          <li>Resource with resource type not specified in this property will not be cleaned up.</li>
         *                          </ul>
         * @return {@code this}
         */
        public Builder resourceTypeOrder(java.util.List<? extends java.lang.Object> resourceTypeOrder) {
            this.resourceTypeOrder = resourceTypeOrder;
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
