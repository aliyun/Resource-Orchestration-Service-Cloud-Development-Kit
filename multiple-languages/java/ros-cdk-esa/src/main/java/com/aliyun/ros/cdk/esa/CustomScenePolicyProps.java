package com.aliyun.ros.cdk.esa;

/**
 * Properties for defining a <code>CustomScenePolicy</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-customscenepolicy
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:25.390Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.CustomScenePolicyProps")
@software.amazon.jsii.Jsii.Proxy(CustomScenePolicyProps.Jsii$Proxy.class)
public interface CustomScenePolicyProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property createTime: The time when the policy takes effect.
     * <p>
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCreateTime();

    /**
     * Property customScenePolicyName: The policy name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCustomScenePolicyName();

    /**
     * Property endTime: The time when the policy expires.
     * <p>
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEndTime();

    /**
     * Property objects: The IDs of the websites that you want to associate with the policy.
     * <p>
     * Separate multiple IDs with commas (,).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getObjects();

    /**
     * Property template: The name of the policy template.
     * <p>
     * Valid value:
     * promotion: major events.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTemplate();

    /**
     * @return a {@link Builder} of {@link CustomScenePolicyProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link CustomScenePolicyProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<CustomScenePolicyProps> {
        java.lang.Object createTime;
        java.lang.Object customScenePolicyName;
        java.lang.Object endTime;
        java.lang.Object objects;
        java.lang.Object template;

        /**
         * Sets the value of {@link CustomScenePolicyProps#getCreateTime}
         * @param createTime Property createTime: The time when the policy takes effect. This parameter is required.
         *                   The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
         * @return {@code this}
         */
        public Builder createTime(java.lang.String createTime) {
            this.createTime = createTime;
            return this;
        }

        /**
         * Sets the value of {@link CustomScenePolicyProps#getCreateTime}
         * @param createTime Property createTime: The time when the policy takes effect. This parameter is required.
         *                   The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
         * @return {@code this}
         */
        public Builder createTime(com.aliyun.ros.cdk.core.IResolvable createTime) {
            this.createTime = createTime;
            return this;
        }

        /**
         * Sets the value of {@link CustomScenePolicyProps#getCustomScenePolicyName}
         * @param customScenePolicyName Property customScenePolicyName: The policy name. This parameter is required.
         * @return {@code this}
         */
        public Builder customScenePolicyName(java.lang.String customScenePolicyName) {
            this.customScenePolicyName = customScenePolicyName;
            return this;
        }

        /**
         * Sets the value of {@link CustomScenePolicyProps#getCustomScenePolicyName}
         * @param customScenePolicyName Property customScenePolicyName: The policy name. This parameter is required.
         * @return {@code this}
         */
        public Builder customScenePolicyName(com.aliyun.ros.cdk.core.IResolvable customScenePolicyName) {
            this.customScenePolicyName = customScenePolicyName;
            return this;
        }

        /**
         * Sets the value of {@link CustomScenePolicyProps#getEndTime}
         * @param endTime Property endTime: The time when the policy expires. This parameter is required.
         *                The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
         * @return {@code this}
         */
        public Builder endTime(java.lang.String endTime) {
            this.endTime = endTime;
            return this;
        }

        /**
         * Sets the value of {@link CustomScenePolicyProps#getEndTime}
         * @param endTime Property endTime: The time when the policy expires. This parameter is required.
         *                The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
         * @return {@code this}
         */
        public Builder endTime(com.aliyun.ros.cdk.core.IResolvable endTime) {
            this.endTime = endTime;
            return this;
        }

        /**
         * Sets the value of {@link CustomScenePolicyProps#getObjects}
         * @param objects Property objects: The IDs of the websites that you want to associate with the policy. This parameter is required.
         *                Separate multiple IDs with commas (,).
         * @return {@code this}
         */
        public Builder objects(java.lang.String objects) {
            this.objects = objects;
            return this;
        }

        /**
         * Sets the value of {@link CustomScenePolicyProps#getObjects}
         * @param objects Property objects: The IDs of the websites that you want to associate with the policy. This parameter is required.
         *                Separate multiple IDs with commas (,).
         * @return {@code this}
         */
        public Builder objects(com.aliyun.ros.cdk.core.IResolvable objects) {
            this.objects = objects;
            return this;
        }

        /**
         * Sets the value of {@link CustomScenePolicyProps#getTemplate}
         * @param template Property template: The name of the policy template. This parameter is required.
         *                 Valid value:
         *                 promotion: major events.
         * @return {@code this}
         */
        public Builder template(java.lang.String template) {
            this.template = template;
            return this;
        }

        /**
         * Sets the value of {@link CustomScenePolicyProps#getTemplate}
         * @param template Property template: The name of the policy template. This parameter is required.
         *                 Valid value:
         *                 promotion: major events.
         * @return {@code this}
         */
        public Builder template(com.aliyun.ros.cdk.core.IResolvable template) {
            this.template = template;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link CustomScenePolicyProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public CustomScenePolicyProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link CustomScenePolicyProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CustomScenePolicyProps {
        private final java.lang.Object createTime;
        private final java.lang.Object customScenePolicyName;
        private final java.lang.Object endTime;
        private final java.lang.Object objects;
        private final java.lang.Object template;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.createTime = software.amazon.jsii.Kernel.get(this, "createTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.customScenePolicyName = software.amazon.jsii.Kernel.get(this, "customScenePolicyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endTime = software.amazon.jsii.Kernel.get(this, "endTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.objects = software.amazon.jsii.Kernel.get(this, "objects", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.template = software.amazon.jsii.Kernel.get(this, "template", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.createTime = java.util.Objects.requireNonNull(builder.createTime, "createTime is required");
            this.customScenePolicyName = java.util.Objects.requireNonNull(builder.customScenePolicyName, "customScenePolicyName is required");
            this.endTime = java.util.Objects.requireNonNull(builder.endTime, "endTime is required");
            this.objects = java.util.Objects.requireNonNull(builder.objects, "objects is required");
            this.template = java.util.Objects.requireNonNull(builder.template, "template is required");
        }

        @Override
        public final java.lang.Object getCreateTime() {
            return this.createTime;
        }

        @Override
        public final java.lang.Object getCustomScenePolicyName() {
            return this.customScenePolicyName;
        }

        @Override
        public final java.lang.Object getEndTime() {
            return this.endTime;
        }

        @Override
        public final java.lang.Object getObjects() {
            return this.objects;
        }

        @Override
        public final java.lang.Object getTemplate() {
            return this.template;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("createTime", om.valueToTree(this.getCreateTime()));
            data.set("customScenePolicyName", om.valueToTree(this.getCustomScenePolicyName()));
            data.set("endTime", om.valueToTree(this.getEndTime()));
            data.set("objects", om.valueToTree(this.getObjects()));
            data.set("template", om.valueToTree(this.getTemplate()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-esa.CustomScenePolicyProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            CustomScenePolicyProps.Jsii$Proxy that = (CustomScenePolicyProps.Jsii$Proxy) o;

            if (!createTime.equals(that.createTime)) return false;
            if (!customScenePolicyName.equals(that.customScenePolicyName)) return false;
            if (!endTime.equals(that.endTime)) return false;
            if (!objects.equals(that.objects)) return false;
            return this.template.equals(that.template);
        }

        @Override
        public final int hashCode() {
            int result = this.createTime.hashCode();
            result = 31 * result + (this.customScenePolicyName.hashCode());
            result = 31 * result + (this.endTime.hashCode());
            result = 31 * result + (this.objects.hashCode());
            result = 31 * result + (this.template.hashCode());
            return result;
        }
    }
}
