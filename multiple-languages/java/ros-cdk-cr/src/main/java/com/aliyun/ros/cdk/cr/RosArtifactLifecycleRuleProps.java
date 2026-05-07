package com.aliyun.ros.cdk.cr;

/**
 * Properties for defining a <code>RosArtifactLifecycleRule</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-artifactlifecyclerule
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:47.313Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cr.$Module.class, fqn = "@alicloud/ros-cdk-cr.RosArtifactLifecycleRuleProps")
@software.amazon.jsii.Jsii.Proxy(RosArtifactLifecycleRuleProps.Jsii$Proxy.class)
public interface RosArtifactLifecycleRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAuto();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNamespaceName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRepoName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRetentionTagCount() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScheduleTime() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScope() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTagRegexp() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosArtifactLifecycleRuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosArtifactLifecycleRuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosArtifactLifecycleRuleProps> {
        java.lang.Object auto;
        java.lang.Object instanceId;
        java.lang.Object namespaceName;
        java.lang.Object repoName;
        java.lang.Object retentionTagCount;
        java.lang.Object scheduleTime;
        java.lang.Object scope;
        java.lang.Object tagRegexp;

        /**
         * Sets the value of {@link RosArtifactLifecycleRuleProps#getAuto}
         * @param auto the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder auto(java.lang.Boolean auto) {
            this.auto = auto;
            return this;
        }

        /**
         * Sets the value of {@link RosArtifactLifecycleRuleProps#getAuto}
         * @param auto the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder auto(com.aliyun.ros.cdk.core.IResolvable auto) {
            this.auto = auto;
            return this;
        }

        /**
         * Sets the value of {@link RosArtifactLifecycleRuleProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosArtifactLifecycleRuleProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosArtifactLifecycleRuleProps#getNamespaceName}
         * @param namespaceName the value to be set.
         * @return {@code this}
         */
        public Builder namespaceName(java.lang.String namespaceName) {
            this.namespaceName = namespaceName;
            return this;
        }

        /**
         * Sets the value of {@link RosArtifactLifecycleRuleProps#getNamespaceName}
         * @param namespaceName the value to be set.
         * @return {@code this}
         */
        public Builder namespaceName(com.aliyun.ros.cdk.core.IResolvable namespaceName) {
            this.namespaceName = namespaceName;
            return this;
        }

        /**
         * Sets the value of {@link RosArtifactLifecycleRuleProps#getRepoName}
         * @param repoName the value to be set.
         * @return {@code this}
         */
        public Builder repoName(java.lang.String repoName) {
            this.repoName = repoName;
            return this;
        }

        /**
         * Sets the value of {@link RosArtifactLifecycleRuleProps#getRepoName}
         * @param repoName the value to be set.
         * @return {@code this}
         */
        public Builder repoName(com.aliyun.ros.cdk.core.IResolvable repoName) {
            this.repoName = repoName;
            return this;
        }

        /**
         * Sets the value of {@link RosArtifactLifecycleRuleProps#getRetentionTagCount}
         * @param retentionTagCount the value to be set.
         * @return {@code this}
         */
        public Builder retentionTagCount(java.lang.Number retentionTagCount) {
            this.retentionTagCount = retentionTagCount;
            return this;
        }

        /**
         * Sets the value of {@link RosArtifactLifecycleRuleProps#getRetentionTagCount}
         * @param retentionTagCount the value to be set.
         * @return {@code this}
         */
        public Builder retentionTagCount(com.aliyun.ros.cdk.core.IResolvable retentionTagCount) {
            this.retentionTagCount = retentionTagCount;
            return this;
        }

        /**
         * Sets the value of {@link RosArtifactLifecycleRuleProps#getScheduleTime}
         * @param scheduleTime the value to be set.
         * @return {@code this}
         */
        public Builder scheduleTime(java.lang.String scheduleTime) {
            this.scheduleTime = scheduleTime;
            return this;
        }

        /**
         * Sets the value of {@link RosArtifactLifecycleRuleProps#getScheduleTime}
         * @param scheduleTime the value to be set.
         * @return {@code this}
         */
        public Builder scheduleTime(com.aliyun.ros.cdk.core.IResolvable scheduleTime) {
            this.scheduleTime = scheduleTime;
            return this;
        }

        /**
         * Sets the value of {@link RosArtifactLifecycleRuleProps#getScope}
         * @param scope the value to be set.
         * @return {@code this}
         */
        public Builder scope(java.lang.String scope) {
            this.scope = scope;
            return this;
        }

        /**
         * Sets the value of {@link RosArtifactLifecycleRuleProps#getScope}
         * @param scope the value to be set.
         * @return {@code this}
         */
        public Builder scope(com.aliyun.ros.cdk.core.IResolvable scope) {
            this.scope = scope;
            return this;
        }

        /**
         * Sets the value of {@link RosArtifactLifecycleRuleProps#getTagRegexp}
         * @param tagRegexp the value to be set.
         * @return {@code this}
         */
        public Builder tagRegexp(java.lang.String tagRegexp) {
            this.tagRegexp = tagRegexp;
            return this;
        }

        /**
         * Sets the value of {@link RosArtifactLifecycleRuleProps#getTagRegexp}
         * @param tagRegexp the value to be set.
         * @return {@code this}
         */
        public Builder tagRegexp(com.aliyun.ros.cdk.core.IResolvable tagRegexp) {
            this.tagRegexp = tagRegexp;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosArtifactLifecycleRuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosArtifactLifecycleRuleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosArtifactLifecycleRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosArtifactLifecycleRuleProps {
        private final java.lang.Object auto;
        private final java.lang.Object instanceId;
        private final java.lang.Object namespaceName;
        private final java.lang.Object repoName;
        private final java.lang.Object retentionTagCount;
        private final java.lang.Object scheduleTime;
        private final java.lang.Object scope;
        private final java.lang.Object tagRegexp;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.auto = software.amazon.jsii.Kernel.get(this, "auto", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.namespaceName = software.amazon.jsii.Kernel.get(this, "namespaceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.repoName = software.amazon.jsii.Kernel.get(this, "repoName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.retentionTagCount = software.amazon.jsii.Kernel.get(this, "retentionTagCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scheduleTime = software.amazon.jsii.Kernel.get(this, "scheduleTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scope = software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tagRegexp = software.amazon.jsii.Kernel.get(this, "tagRegexp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.auto = java.util.Objects.requireNonNull(builder.auto, "auto is required");
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.namespaceName = builder.namespaceName;
            this.repoName = builder.repoName;
            this.retentionTagCount = builder.retentionTagCount;
            this.scheduleTime = builder.scheduleTime;
            this.scope = builder.scope;
            this.tagRegexp = builder.tagRegexp;
        }

        @Override
        public final java.lang.Object getAuto() {
            return this.auto;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getNamespaceName() {
            return this.namespaceName;
        }

        @Override
        public final java.lang.Object getRepoName() {
            return this.repoName;
        }

        @Override
        public final java.lang.Object getRetentionTagCount() {
            return this.retentionTagCount;
        }

        @Override
        public final java.lang.Object getScheduleTime() {
            return this.scheduleTime;
        }

        @Override
        public final java.lang.Object getScope() {
            return this.scope;
        }

        @Override
        public final java.lang.Object getTagRegexp() {
            return this.tagRegexp;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("auto", om.valueToTree(this.getAuto()));
            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            if (this.getNamespaceName() != null) {
                data.set("namespaceName", om.valueToTree(this.getNamespaceName()));
            }
            if (this.getRepoName() != null) {
                data.set("repoName", om.valueToTree(this.getRepoName()));
            }
            if (this.getRetentionTagCount() != null) {
                data.set("retentionTagCount", om.valueToTree(this.getRetentionTagCount()));
            }
            if (this.getScheduleTime() != null) {
                data.set("scheduleTime", om.valueToTree(this.getScheduleTime()));
            }
            if (this.getScope() != null) {
                data.set("scope", om.valueToTree(this.getScope()));
            }
            if (this.getTagRegexp() != null) {
                data.set("tagRegexp", om.valueToTree(this.getTagRegexp()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cr.RosArtifactLifecycleRuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosArtifactLifecycleRuleProps.Jsii$Proxy that = (RosArtifactLifecycleRuleProps.Jsii$Proxy) o;

            if (!auto.equals(that.auto)) return false;
            if (!instanceId.equals(that.instanceId)) return false;
            if (this.namespaceName != null ? !this.namespaceName.equals(that.namespaceName) : that.namespaceName != null) return false;
            if (this.repoName != null ? !this.repoName.equals(that.repoName) : that.repoName != null) return false;
            if (this.retentionTagCount != null ? !this.retentionTagCount.equals(that.retentionTagCount) : that.retentionTagCount != null) return false;
            if (this.scheduleTime != null ? !this.scheduleTime.equals(that.scheduleTime) : that.scheduleTime != null) return false;
            if (this.scope != null ? !this.scope.equals(that.scope) : that.scope != null) return false;
            return this.tagRegexp != null ? this.tagRegexp.equals(that.tagRegexp) : that.tagRegexp == null;
        }

        @Override
        public final int hashCode() {
            int result = this.auto.hashCode();
            result = 31 * result + (this.instanceId.hashCode());
            result = 31 * result + (this.namespaceName != null ? this.namespaceName.hashCode() : 0);
            result = 31 * result + (this.repoName != null ? this.repoName.hashCode() : 0);
            result = 31 * result + (this.retentionTagCount != null ? this.retentionTagCount.hashCode() : 0);
            result = 31 * result + (this.scheduleTime != null ? this.scheduleTime.hashCode() : 0);
            result = 31 * result + (this.scope != null ? this.scope.hashCode() : 0);
            result = 31 * result + (this.tagRegexp != null ? this.tagRegexp.hashCode() : 0);
            return result;
        }
    }
}
