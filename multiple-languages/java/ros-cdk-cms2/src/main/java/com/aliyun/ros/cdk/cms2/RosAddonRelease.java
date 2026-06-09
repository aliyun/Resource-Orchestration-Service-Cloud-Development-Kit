package com.aliyun.ros.cdk.cms2;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::CMS2::AddonRelease</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:59:01.340Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms2.$Module.class, fqn = "@alicloud/ros-cdk-cms2.RosAddonRelease")
public class RosAddonRelease extends com.aliyun.ros.cdk.core.RosResource {

    protected RosAddonRelease(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosAddonRelease(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cms2.RosAddonRelease.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosAddonRelease(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms2.RosAddonReleaseProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrReleaseName() {
        return software.amazon.jsii.Kernel.get(this, "attrReleaseName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAddonName() {
        return software.amazon.jsii.Kernel.get(this, "addonName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAddonName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "addonName", java.util.Objects.requireNonNull(value, "addonName is required"));
    }

    /**
     */
    public void setAddonName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "addonName", java.util.Objects.requireNonNull(value, "addonName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAddonVersion() {
        return software.amazon.jsii.Kernel.get(this, "addonVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAddonVersion(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "addonVersion", java.util.Objects.requireNonNull(value, "addonVersion is required"));
    }

    /**
     */
    public void setAddonVersion(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "addonVersion", java.util.Objects.requireNonNull(value, "addonVersion is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPolicyId() {
        return software.amazon.jsii.Kernel.get(this, "policyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPolicyId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "policyId", java.util.Objects.requireNonNull(value, "policyId is required"));
    }

    /**
     */
    public void setPolicyId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "policyId", java.util.Objects.requireNonNull(value, "policyId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEntityRules() {
        return software.amazon.jsii.Kernel.get(this, "entityRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEntityRules(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "entityRules", value);
    }

    /**
     */
    public void setEntityRules(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.cms2.RosAddonRelease.EntityRulesProperty value) {
        software.amazon.jsii.Kernel.set(this, "entityRules", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnvType() {
        return software.amazon.jsii.Kernel.get(this, "envType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnvType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "envType", value);
    }

    /**
     */
    public void setEnvType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "envType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLang() {
        return software.amazon.jsii.Kernel.get(this, "lang", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLang(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "lang", value);
    }

    /**
     */
    public void setLang(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "lang", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getParentAddonReleaseId() {
        return software.amazon.jsii.Kernel.get(this, "parentAddonReleaseId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setParentAddonReleaseId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "parentAddonReleaseId", value);
    }

    /**
     */
    public void setParentAddonReleaseId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "parentAddonReleaseId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getReleaseName() {
        return software.amazon.jsii.Kernel.get(this, "releaseName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setReleaseName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "releaseName", value);
    }

    /**
     */
    public void setReleaseName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "releaseName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getValues() {
        return software.amazon.jsii.Kernel.get(this, "values", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setValues(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "values", value);
    }

    /**
     */
    public void setValues(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (!(value.keySet().toArray()[0] instanceof String)) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("value").append(".keySet()")
                        .append(" to contain class String; received ")
                        .append(value.keySet().toArray()[0].getClass()).toString());
            }
            for (final java.util.Map.Entry<String, java.lang.Object> __item_ac66f0: value.entrySet()) {
                final java.lang.Object __val_ac66f0 = __item_ac66f0.getValue();
            }
        }
        software.amazon.jsii.Kernel.set(this, "values", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getWorkspace() {
        return software.amazon.jsii.Kernel.get(this, "workspace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWorkspace(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "workspace", value);
    }

    /**
     */
    public void setWorkspace(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "workspace", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms2.$Module.class, fqn = "@alicloud/ros-cdk-cms2.RosAddonRelease.AnnotationsProperty")
    @software.amazon.jsii.Jsii.Proxy(AnnotationsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AnnotationsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getOp();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getTagKey();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getTagValues();

        /**
         * @return a {@link Builder} of {@link AnnotationsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AnnotationsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AnnotationsProperty> {
            java.lang.Object op;
            java.lang.Object tagKey;
            java.lang.Object tagValues;

            /**
             * Sets the value of {@link AnnotationsProperty#getOp}
             * @param op the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder op(java.lang.String op) {
                this.op = op;
                return this;
            }

            /**
             * Sets the value of {@link AnnotationsProperty#getOp}
             * @param op the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder op(com.aliyun.ros.cdk.core.IResolvable op) {
                this.op = op;
                return this;
            }

            /**
             * Sets the value of {@link AnnotationsProperty#getTagKey}
             * @param tagKey the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tagKey(java.lang.String tagKey) {
                this.tagKey = tagKey;
                return this;
            }

            /**
             * Sets the value of {@link AnnotationsProperty#getTagKey}
             * @param tagKey the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tagKey(com.aliyun.ros.cdk.core.IResolvable tagKey) {
                this.tagKey = tagKey;
                return this;
            }

            /**
             * Sets the value of {@link AnnotationsProperty#getTagValues}
             * @param tagValues the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tagValues(com.aliyun.ros.cdk.core.IResolvable tagValues) {
                this.tagValues = tagValues;
                return this;
            }

            /**
             * Sets the value of {@link AnnotationsProperty#getTagValues}
             * @param tagValues the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tagValues(java.util.List<? extends java.lang.Object> tagValues) {
                this.tagValues = tagValues;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AnnotationsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AnnotationsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AnnotationsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AnnotationsProperty {
            private final java.lang.Object op;
            private final java.lang.Object tagKey;
            private final java.lang.Object tagValues;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.op = software.amazon.jsii.Kernel.get(this, "op", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.tagKey = software.amazon.jsii.Kernel.get(this, "tagKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.tagValues = software.amazon.jsii.Kernel.get(this, "tagValues", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.op = java.util.Objects.requireNonNull(builder.op, "op is required");
                this.tagKey = java.util.Objects.requireNonNull(builder.tagKey, "tagKey is required");
                this.tagValues = java.util.Objects.requireNonNull(builder.tagValues, "tagValues is required");
            }

            @Override
            public final java.lang.Object getOp() {
                return this.op;
            }

            @Override
            public final java.lang.Object getTagKey() {
                return this.tagKey;
            }

            @Override
            public final java.lang.Object getTagValues() {
                return this.tagValues;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("op", om.valueToTree(this.getOp()));
                data.set("tagKey", om.valueToTree(this.getTagKey()));
                data.set("tagValues", om.valueToTree(this.getTagValues()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms2.RosAddonRelease.AnnotationsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AnnotationsProperty.Jsii$Proxy that = (AnnotationsProperty.Jsii$Proxy) o;

                if (!op.equals(that.op)) return false;
                if (!tagKey.equals(that.tagKey)) return false;
                return this.tagValues.equals(that.tagValues);
            }

            @Override
            public final int hashCode() {
                int result = this.op.hashCode();
                result = 31 * result + (this.tagKey.hashCode());
                result = 31 * result + (this.tagValues.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms2.$Module.class, fqn = "@alicloud/ros-cdk-cms2.RosAddonRelease.EntityRulesProperty")
    @software.amazon.jsii.Jsii.Proxy(EntityRulesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface EntityRulesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAnnotations() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEntityTypes() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFieldRules() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceIds() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIpMatchRule() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLabels() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRegionIds() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.cms2.RosAddonRelease.TagsProperty> getTags() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link EntityRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link EntityRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<EntityRulesProperty> {
            java.lang.Object annotations;
            java.lang.Object entityTypes;
            java.lang.Object fieldRules;
            java.lang.Object instanceIds;
            java.lang.Object ipMatchRule;
            java.lang.Object labels;
            java.lang.Object regionIds;
            java.lang.Object resourceGroupId;
            java.util.List<com.aliyun.ros.cdk.cms2.RosAddonRelease.TagsProperty> tags;

            /**
             * Sets the value of {@link EntityRulesProperty#getAnnotations}
             * @param annotations the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder annotations(com.aliyun.ros.cdk.core.IResolvable annotations) {
                this.annotations = annotations;
                return this;
            }

            /**
             * Sets the value of {@link EntityRulesProperty#getAnnotations}
             * @param annotations the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder annotations(java.util.List<? extends java.lang.Object> annotations) {
                this.annotations = annotations;
                return this;
            }

            /**
             * Sets the value of {@link EntityRulesProperty#getEntityTypes}
             * @param entityTypes the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder entityTypes(com.aliyun.ros.cdk.core.IResolvable entityTypes) {
                this.entityTypes = entityTypes;
                return this;
            }

            /**
             * Sets the value of {@link EntityRulesProperty#getEntityTypes}
             * @param entityTypes the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder entityTypes(java.util.List<? extends java.lang.Object> entityTypes) {
                this.entityTypes = entityTypes;
                return this;
            }

            /**
             * Sets the value of {@link EntityRulesProperty#getFieldRules}
             * @param fieldRules the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fieldRules(com.aliyun.ros.cdk.core.IResolvable fieldRules) {
                this.fieldRules = fieldRules;
                return this;
            }

            /**
             * Sets the value of {@link EntityRulesProperty#getFieldRules}
             * @param fieldRules the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fieldRules(java.util.List<? extends java.lang.Object> fieldRules) {
                this.fieldRules = fieldRules;
                return this;
            }

            /**
             * Sets the value of {@link EntityRulesProperty#getInstanceIds}
             * @param instanceIds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceIds(com.aliyun.ros.cdk.core.IResolvable instanceIds) {
                this.instanceIds = instanceIds;
                return this;
            }

            /**
             * Sets the value of {@link EntityRulesProperty#getInstanceIds}
             * @param instanceIds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceIds(java.util.List<? extends java.lang.Object> instanceIds) {
                this.instanceIds = instanceIds;
                return this;
            }

            /**
             * Sets the value of {@link EntityRulesProperty#getIpMatchRule}
             * @param ipMatchRule the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipMatchRule(com.aliyun.ros.cdk.core.IResolvable ipMatchRule) {
                this.ipMatchRule = ipMatchRule;
                return this;
            }

            /**
             * Sets the value of {@link EntityRulesProperty#getIpMatchRule}
             * @param ipMatchRule the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipMatchRule(java.util.List<? extends java.lang.Object> ipMatchRule) {
                this.ipMatchRule = ipMatchRule;
                return this;
            }

            /**
             * Sets the value of {@link EntityRulesProperty#getLabels}
             * @param labels the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder labels(com.aliyun.ros.cdk.core.IResolvable labels) {
                this.labels = labels;
                return this;
            }

            /**
             * Sets the value of {@link EntityRulesProperty#getLabels}
             * @param labels the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder labels(java.util.List<? extends java.lang.Object> labels) {
                this.labels = labels;
                return this;
            }

            /**
             * Sets the value of {@link EntityRulesProperty#getRegionIds}
             * @param regionIds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder regionIds(com.aliyun.ros.cdk.core.IResolvable regionIds) {
                this.regionIds = regionIds;
                return this;
            }

            /**
             * Sets the value of {@link EntityRulesProperty#getRegionIds}
             * @param regionIds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder regionIds(java.util.List<? extends java.lang.Object> regionIds) {
                this.regionIds = regionIds;
                return this;
            }

            /**
             * Sets the value of {@link EntityRulesProperty#getResourceGroupId}
             * @param resourceGroupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resourceGroupId(java.lang.String resourceGroupId) {
                this.resourceGroupId = resourceGroupId;
                return this;
            }

            /**
             * Sets the value of {@link EntityRulesProperty#getResourceGroupId}
             * @param resourceGroupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
                this.resourceGroupId = resourceGroupId;
                return this;
            }

            /**
             * Sets the value of {@link EntityRulesProperty#getTags}
             * @param tags the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @SuppressWarnings("unchecked")
            public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.cms2.RosAddonRelease.TagsProperty> tags) {
                this.tags = (java.util.List<com.aliyun.ros.cdk.cms2.RosAddonRelease.TagsProperty>)tags;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link EntityRulesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public EntityRulesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link EntityRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements EntityRulesProperty {
            private final java.lang.Object annotations;
            private final java.lang.Object entityTypes;
            private final java.lang.Object fieldRules;
            private final java.lang.Object instanceIds;
            private final java.lang.Object ipMatchRule;
            private final java.lang.Object labels;
            private final java.lang.Object regionIds;
            private final java.lang.Object resourceGroupId;
            private final java.util.List<com.aliyun.ros.cdk.cms2.RosAddonRelease.TagsProperty> tags;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.annotations = software.amazon.jsii.Kernel.get(this, "annotations", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.entityTypes = software.amazon.jsii.Kernel.get(this, "entityTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.fieldRules = software.amazon.jsii.Kernel.get(this, "fieldRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.instanceIds = software.amazon.jsii.Kernel.get(this, "instanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ipMatchRule = software.amazon.jsii.Kernel.get(this, "ipMatchRule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.labels = software.amazon.jsii.Kernel.get(this, "labels", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.regionIds = software.amazon.jsii.Kernel.get(this, "regionIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cms2.RosAddonRelease.TagsProperty.class)));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            @SuppressWarnings("unchecked")
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.annotations = builder.annotations;
                this.entityTypes = builder.entityTypes;
                this.fieldRules = builder.fieldRules;
                this.instanceIds = builder.instanceIds;
                this.ipMatchRule = builder.ipMatchRule;
                this.labels = builder.labels;
                this.regionIds = builder.regionIds;
                this.resourceGroupId = builder.resourceGroupId;
                this.tags = (java.util.List<com.aliyun.ros.cdk.cms2.RosAddonRelease.TagsProperty>)builder.tags;
            }

            @Override
            public final java.lang.Object getAnnotations() {
                return this.annotations;
            }

            @Override
            public final java.lang.Object getEntityTypes() {
                return this.entityTypes;
            }

            @Override
            public final java.lang.Object getFieldRules() {
                return this.fieldRules;
            }

            @Override
            public final java.lang.Object getInstanceIds() {
                return this.instanceIds;
            }

            @Override
            public final java.lang.Object getIpMatchRule() {
                return this.ipMatchRule;
            }

            @Override
            public final java.lang.Object getLabels() {
                return this.labels;
            }

            @Override
            public final java.lang.Object getRegionIds() {
                return this.regionIds;
            }

            @Override
            public final java.lang.Object getResourceGroupId() {
                return this.resourceGroupId;
            }

            @Override
            public final java.util.List<com.aliyun.ros.cdk.cms2.RosAddonRelease.TagsProperty> getTags() {
                return this.tags;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getAnnotations() != null) {
                    data.set("annotations", om.valueToTree(this.getAnnotations()));
                }
                if (this.getEntityTypes() != null) {
                    data.set("entityTypes", om.valueToTree(this.getEntityTypes()));
                }
                if (this.getFieldRules() != null) {
                    data.set("fieldRules", om.valueToTree(this.getFieldRules()));
                }
                if (this.getInstanceIds() != null) {
                    data.set("instanceIds", om.valueToTree(this.getInstanceIds()));
                }
                if (this.getIpMatchRule() != null) {
                    data.set("ipMatchRule", om.valueToTree(this.getIpMatchRule()));
                }
                if (this.getLabels() != null) {
                    data.set("labels", om.valueToTree(this.getLabels()));
                }
                if (this.getRegionIds() != null) {
                    data.set("regionIds", om.valueToTree(this.getRegionIds()));
                }
                if (this.getResourceGroupId() != null) {
                    data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
                }
                if (this.getTags() != null) {
                    data.set("tags", om.valueToTree(this.getTags()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms2.RosAddonRelease.EntityRulesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                EntityRulesProperty.Jsii$Proxy that = (EntityRulesProperty.Jsii$Proxy) o;

                if (this.annotations != null ? !this.annotations.equals(that.annotations) : that.annotations != null) return false;
                if (this.entityTypes != null ? !this.entityTypes.equals(that.entityTypes) : that.entityTypes != null) return false;
                if (this.fieldRules != null ? !this.fieldRules.equals(that.fieldRules) : that.fieldRules != null) return false;
                if (this.instanceIds != null ? !this.instanceIds.equals(that.instanceIds) : that.instanceIds != null) return false;
                if (this.ipMatchRule != null ? !this.ipMatchRule.equals(that.ipMatchRule) : that.ipMatchRule != null) return false;
                if (this.labels != null ? !this.labels.equals(that.labels) : that.labels != null) return false;
                if (this.regionIds != null ? !this.regionIds.equals(that.regionIds) : that.regionIds != null) return false;
                if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
                return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
            }

            @Override
            public final int hashCode() {
                int result = this.annotations != null ? this.annotations.hashCode() : 0;
                result = 31 * result + (this.entityTypes != null ? this.entityTypes.hashCode() : 0);
                result = 31 * result + (this.fieldRules != null ? this.fieldRules.hashCode() : 0);
                result = 31 * result + (this.instanceIds != null ? this.instanceIds.hashCode() : 0);
                result = 31 * result + (this.ipMatchRule != null ? this.ipMatchRule.hashCode() : 0);
                result = 31 * result + (this.labels != null ? this.labels.hashCode() : 0);
                result = 31 * result + (this.regionIds != null ? this.regionIds.hashCode() : 0);
                result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
                result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms2.$Module.class, fqn = "@alicloud/ros-cdk-cms2.RosAddonRelease.FieldRulesProperty")
    @software.amazon.jsii.Jsii.Proxy(FieldRulesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface FieldRulesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getFieldKey();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getFieldValues();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getOp();

        /**
         * @return a {@link Builder} of {@link FieldRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link FieldRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<FieldRulesProperty> {
            java.lang.Object fieldKey;
            java.lang.Object fieldValues;
            java.lang.Object op;

            /**
             * Sets the value of {@link FieldRulesProperty#getFieldKey}
             * @param fieldKey the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fieldKey(java.lang.String fieldKey) {
                this.fieldKey = fieldKey;
                return this;
            }

            /**
             * Sets the value of {@link FieldRulesProperty#getFieldKey}
             * @param fieldKey the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fieldKey(com.aliyun.ros.cdk.core.IResolvable fieldKey) {
                this.fieldKey = fieldKey;
                return this;
            }

            /**
             * Sets the value of {@link FieldRulesProperty#getFieldValues}
             * @param fieldValues the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fieldValues(com.aliyun.ros.cdk.core.IResolvable fieldValues) {
                this.fieldValues = fieldValues;
                return this;
            }

            /**
             * Sets the value of {@link FieldRulesProperty#getFieldValues}
             * @param fieldValues the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder fieldValues(java.util.List<? extends java.lang.Object> fieldValues) {
                this.fieldValues = fieldValues;
                return this;
            }

            /**
             * Sets the value of {@link FieldRulesProperty#getOp}
             * @param op the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder op(java.lang.String op) {
                this.op = op;
                return this;
            }

            /**
             * Sets the value of {@link FieldRulesProperty#getOp}
             * @param op the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder op(com.aliyun.ros.cdk.core.IResolvable op) {
                this.op = op;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link FieldRulesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public FieldRulesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link FieldRulesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements FieldRulesProperty {
            private final java.lang.Object fieldKey;
            private final java.lang.Object fieldValues;
            private final java.lang.Object op;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.fieldKey = software.amazon.jsii.Kernel.get(this, "fieldKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.fieldValues = software.amazon.jsii.Kernel.get(this, "fieldValues", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.op = software.amazon.jsii.Kernel.get(this, "op", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.fieldKey = java.util.Objects.requireNonNull(builder.fieldKey, "fieldKey is required");
                this.fieldValues = java.util.Objects.requireNonNull(builder.fieldValues, "fieldValues is required");
                this.op = java.util.Objects.requireNonNull(builder.op, "op is required");
            }

            @Override
            public final java.lang.Object getFieldKey() {
                return this.fieldKey;
            }

            @Override
            public final java.lang.Object getFieldValues() {
                return this.fieldValues;
            }

            @Override
            public final java.lang.Object getOp() {
                return this.op;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("fieldKey", om.valueToTree(this.getFieldKey()));
                data.set("fieldValues", om.valueToTree(this.getFieldValues()));
                data.set("op", om.valueToTree(this.getOp()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms2.RosAddonRelease.FieldRulesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                FieldRulesProperty.Jsii$Proxy that = (FieldRulesProperty.Jsii$Proxy) o;

                if (!fieldKey.equals(that.fieldKey)) return false;
                if (!fieldValues.equals(that.fieldValues)) return false;
                return this.op.equals(that.op);
            }

            @Override
            public final int hashCode() {
                int result = this.fieldKey.hashCode();
                result = 31 * result + (this.fieldValues.hashCode());
                result = 31 * result + (this.op.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms2.$Module.class, fqn = "@alicloud/ros-cdk-cms2.RosAddonRelease.IpMatchRuleProperty")
    @software.amazon.jsii.Jsii.Proxy(IpMatchRuleProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface IpMatchRuleProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIpCidr() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIpFieldKey() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link IpMatchRuleProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link IpMatchRuleProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<IpMatchRuleProperty> {
            java.lang.Object ipCidr;
            java.lang.Object ipFieldKey;

            /**
             * Sets the value of {@link IpMatchRuleProperty#getIpCidr}
             * @param ipCidr the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipCidr(java.lang.String ipCidr) {
                this.ipCidr = ipCidr;
                return this;
            }

            /**
             * Sets the value of {@link IpMatchRuleProperty#getIpCidr}
             * @param ipCidr the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipCidr(com.aliyun.ros.cdk.core.IResolvable ipCidr) {
                this.ipCidr = ipCidr;
                return this;
            }

            /**
             * Sets the value of {@link IpMatchRuleProperty#getIpFieldKey}
             * @param ipFieldKey the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipFieldKey(java.lang.String ipFieldKey) {
                this.ipFieldKey = ipFieldKey;
                return this;
            }

            /**
             * Sets the value of {@link IpMatchRuleProperty#getIpFieldKey}
             * @param ipFieldKey the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ipFieldKey(com.aliyun.ros.cdk.core.IResolvable ipFieldKey) {
                this.ipFieldKey = ipFieldKey;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link IpMatchRuleProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public IpMatchRuleProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link IpMatchRuleProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements IpMatchRuleProperty {
            private final java.lang.Object ipCidr;
            private final java.lang.Object ipFieldKey;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.ipCidr = software.amazon.jsii.Kernel.get(this, "ipCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ipFieldKey = software.amazon.jsii.Kernel.get(this, "ipFieldKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.ipCidr = builder.ipCidr;
                this.ipFieldKey = builder.ipFieldKey;
            }

            @Override
            public final java.lang.Object getIpCidr() {
                return this.ipCidr;
            }

            @Override
            public final java.lang.Object getIpFieldKey() {
                return this.ipFieldKey;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getIpCidr() != null) {
                    data.set("ipCidr", om.valueToTree(this.getIpCidr()));
                }
                if (this.getIpFieldKey() != null) {
                    data.set("ipFieldKey", om.valueToTree(this.getIpFieldKey()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms2.RosAddonRelease.IpMatchRuleProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                IpMatchRuleProperty.Jsii$Proxy that = (IpMatchRuleProperty.Jsii$Proxy) o;

                if (this.ipCidr != null ? !this.ipCidr.equals(that.ipCidr) : that.ipCidr != null) return false;
                return this.ipFieldKey != null ? this.ipFieldKey.equals(that.ipFieldKey) : that.ipFieldKey == null;
            }

            @Override
            public final int hashCode() {
                int result = this.ipCidr != null ? this.ipCidr.hashCode() : 0;
                result = 31 * result + (this.ipFieldKey != null ? this.ipFieldKey.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms2.$Module.class, fqn = "@alicloud/ros-cdk-cms2.RosAddonRelease.LabelsProperty")
    @software.amazon.jsii.Jsii.Proxy(LabelsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface LabelsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getOp();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getTagKey();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getTagValues();

        /**
         * @return a {@link Builder} of {@link LabelsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link LabelsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<LabelsProperty> {
            java.lang.Object op;
            java.lang.Object tagKey;
            java.lang.Object tagValues;

            /**
             * Sets the value of {@link LabelsProperty#getOp}
             * @param op the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder op(java.lang.String op) {
                this.op = op;
                return this;
            }

            /**
             * Sets the value of {@link LabelsProperty#getOp}
             * @param op the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder op(com.aliyun.ros.cdk.core.IResolvable op) {
                this.op = op;
                return this;
            }

            /**
             * Sets the value of {@link LabelsProperty#getTagKey}
             * @param tagKey the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tagKey(java.lang.String tagKey) {
                this.tagKey = tagKey;
                return this;
            }

            /**
             * Sets the value of {@link LabelsProperty#getTagKey}
             * @param tagKey the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tagKey(com.aliyun.ros.cdk.core.IResolvable tagKey) {
                this.tagKey = tagKey;
                return this;
            }

            /**
             * Sets the value of {@link LabelsProperty#getTagValues}
             * @param tagValues the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tagValues(com.aliyun.ros.cdk.core.IResolvable tagValues) {
                this.tagValues = tagValues;
                return this;
            }

            /**
             * Sets the value of {@link LabelsProperty#getTagValues}
             * @param tagValues the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tagValues(java.util.List<? extends java.lang.Object> tagValues) {
                this.tagValues = tagValues;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link LabelsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public LabelsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link LabelsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements LabelsProperty {
            private final java.lang.Object op;
            private final java.lang.Object tagKey;
            private final java.lang.Object tagValues;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.op = software.amazon.jsii.Kernel.get(this, "op", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.tagKey = software.amazon.jsii.Kernel.get(this, "tagKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.tagValues = software.amazon.jsii.Kernel.get(this, "tagValues", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.op = java.util.Objects.requireNonNull(builder.op, "op is required");
                this.tagKey = java.util.Objects.requireNonNull(builder.tagKey, "tagKey is required");
                this.tagValues = java.util.Objects.requireNonNull(builder.tagValues, "tagValues is required");
            }

            @Override
            public final java.lang.Object getOp() {
                return this.op;
            }

            @Override
            public final java.lang.Object getTagKey() {
                return this.tagKey;
            }

            @Override
            public final java.lang.Object getTagValues() {
                return this.tagValues;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("op", om.valueToTree(this.getOp()));
                data.set("tagKey", om.valueToTree(this.getTagKey()));
                data.set("tagValues", om.valueToTree(this.getTagValues()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms2.RosAddonRelease.LabelsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                LabelsProperty.Jsii$Proxy that = (LabelsProperty.Jsii$Proxy) o;

                if (!op.equals(that.op)) return false;
                if (!tagKey.equals(that.tagKey)) return false;
                return this.tagValues.equals(that.tagValues);
            }

            @Override
            public final int hashCode() {
                int result = this.op.hashCode();
                result = 31 * result + (this.tagKey.hashCode());
                result = 31 * result + (this.tagValues.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms2.$Module.class, fqn = "@alicloud/ros-cdk-cms2.RosAddonRelease.TagsProperty")
    @software.amazon.jsii.Jsii.Proxy(TagsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TagsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getOp();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getTagKey();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getTagValues();

        /**
         * @return a {@link Builder} of {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TagsProperty> {
            java.lang.Object op;
            java.lang.Object tagKey;
            java.lang.Object tagValues;

            /**
             * Sets the value of {@link TagsProperty#getOp}
             * @param op the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder op(java.lang.String op) {
                this.op = op;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getOp}
             * @param op the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder op(com.aliyun.ros.cdk.core.IResolvable op) {
                this.op = op;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getTagKey}
             * @param tagKey the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tagKey(java.lang.String tagKey) {
                this.tagKey = tagKey;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getTagKey}
             * @param tagKey the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tagKey(com.aliyun.ros.cdk.core.IResolvable tagKey) {
                this.tagKey = tagKey;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getTagValues}
             * @param tagValues the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tagValues(com.aliyun.ros.cdk.core.IResolvable tagValues) {
                this.tagValues = tagValues;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getTagValues}
             * @param tagValues the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tagValues(java.util.List<? extends java.lang.Object> tagValues) {
                this.tagValues = tagValues;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TagsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TagsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TagsProperty {
            private final java.lang.Object op;
            private final java.lang.Object tagKey;
            private final java.lang.Object tagValues;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.op = software.amazon.jsii.Kernel.get(this, "op", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.tagKey = software.amazon.jsii.Kernel.get(this, "tagKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.tagValues = software.amazon.jsii.Kernel.get(this, "tagValues", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.op = java.util.Objects.requireNonNull(builder.op, "op is required");
                this.tagKey = java.util.Objects.requireNonNull(builder.tagKey, "tagKey is required");
                this.tagValues = java.util.Objects.requireNonNull(builder.tagValues, "tagValues is required");
            }

            @Override
            public final java.lang.Object getOp() {
                return this.op;
            }

            @Override
            public final java.lang.Object getTagKey() {
                return this.tagKey;
            }

            @Override
            public final java.lang.Object getTagValues() {
                return this.tagValues;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("op", om.valueToTree(this.getOp()));
                data.set("tagKey", om.valueToTree(this.getTagKey()));
                data.set("tagValues", om.valueToTree(this.getTagValues()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms2.RosAddonRelease.TagsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TagsProperty.Jsii$Proxy that = (TagsProperty.Jsii$Proxy) o;

                if (!op.equals(that.op)) return false;
                if (!tagKey.equals(that.tagKey)) return false;
                return this.tagValues.equals(that.tagValues);
            }

            @Override
            public final int hashCode() {
                int result = this.op.hashCode();
                result = 31 * result + (this.tagKey.hashCode());
                result = 31 * result + (this.tagValues.hashCode());
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cms2.RosAddonRelease}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cms2.RosAddonRelease> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.cms2.RosAddonReleaseProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cms2.RosAddonReleaseProps.Builder();
        }

        /**
         * @return {@code this}
         * @param addonName This parameter is required.
         */
        public Builder addonName(final java.lang.String addonName) {
            this.props.addonName(addonName);
            return this;
        }
        /**
         * @return {@code this}
         * @param addonName This parameter is required.
         */
        public Builder addonName(final com.aliyun.ros.cdk.core.IResolvable addonName) {
            this.props.addonName(addonName);
            return this;
        }

        /**
         * @return {@code this}
         * @param addonVersion This parameter is required.
         */
        public Builder addonVersion(final java.lang.String addonVersion) {
            this.props.addonVersion(addonVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param addonVersion This parameter is required.
         */
        public Builder addonVersion(final com.aliyun.ros.cdk.core.IResolvable addonVersion) {
            this.props.addonVersion(addonVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param policyId This parameter is required.
         */
        public Builder policyId(final java.lang.String policyId) {
            this.props.policyId(policyId);
            return this;
        }
        /**
         * @return {@code this}
         * @param policyId This parameter is required.
         */
        public Builder policyId(final com.aliyun.ros.cdk.core.IResolvable policyId) {
            this.props.policyId(policyId);
            return this;
        }

        /**
         * @return {@code this}
         * @param entityRules This parameter is required.
         */
        public Builder entityRules(final com.aliyun.ros.cdk.core.IResolvable entityRules) {
            this.props.entityRules(entityRules);
            return this;
        }
        /**
         * @return {@code this}
         * @param entityRules This parameter is required.
         */
        public Builder entityRules(final com.aliyun.ros.cdk.cms2.RosAddonRelease.EntityRulesProperty entityRules) {
            this.props.entityRules(entityRules);
            return this;
        }

        /**
         * @return {@code this}
         * @param envType This parameter is required.
         */
        public Builder envType(final java.lang.String envType) {
            this.props.envType(envType);
            return this;
        }
        /**
         * @return {@code this}
         * @param envType This parameter is required.
         */
        public Builder envType(final com.aliyun.ros.cdk.core.IResolvable envType) {
            this.props.envType(envType);
            return this;
        }

        /**
         * @return {@code this}
         * @param lang This parameter is required.
         */
        public Builder lang(final java.lang.String lang) {
            this.props.lang(lang);
            return this;
        }
        /**
         * @return {@code this}
         * @param lang This parameter is required.
         */
        public Builder lang(final com.aliyun.ros.cdk.core.IResolvable lang) {
            this.props.lang(lang);
            return this;
        }

        /**
         * @return {@code this}
         * @param parentAddonReleaseId This parameter is required.
         */
        public Builder parentAddonReleaseId(final java.lang.String parentAddonReleaseId) {
            this.props.parentAddonReleaseId(parentAddonReleaseId);
            return this;
        }
        /**
         * @return {@code this}
         * @param parentAddonReleaseId This parameter is required.
         */
        public Builder parentAddonReleaseId(final com.aliyun.ros.cdk.core.IResolvable parentAddonReleaseId) {
            this.props.parentAddonReleaseId(parentAddonReleaseId);
            return this;
        }

        /**
         * @return {@code this}
         * @param releaseName This parameter is required.
         */
        public Builder releaseName(final java.lang.String releaseName) {
            this.props.releaseName(releaseName);
            return this;
        }
        /**
         * @return {@code this}
         * @param releaseName This parameter is required.
         */
        public Builder releaseName(final com.aliyun.ros.cdk.core.IResolvable releaseName) {
            this.props.releaseName(releaseName);
            return this;
        }

        /**
         * @return {@code this}
         * @param values This parameter is required.
         */
        public Builder values(final com.aliyun.ros.cdk.core.IResolvable values) {
            this.props.values(values);
            return this;
        }
        /**
         * @return {@code this}
         * @param values This parameter is required.
         */
        public Builder values(final java.util.Map<java.lang.String, ? extends java.lang.Object> values) {
            this.props.values(values);
            return this;
        }

        /**
         * @return {@code this}
         * @param workspace This parameter is required.
         */
        public Builder workspace(final java.lang.String workspace) {
            this.props.workspace(workspace);
            return this;
        }
        /**
         * @return {@code this}
         * @param workspace This parameter is required.
         */
        public Builder workspace(final com.aliyun.ros.cdk.core.IResolvable workspace) {
            this.props.workspace(workspace);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cms2.RosAddonRelease}.
         */
        @Override
        public com.aliyun.ros.cdk.cms2.RosAddonRelease build() {
            return new com.aliyun.ros.cdk.cms2.RosAddonRelease(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
