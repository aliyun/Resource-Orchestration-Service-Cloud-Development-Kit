package com.aliyun.ros.cdk.threatdetection;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ThreatDetection::ImageEventOperation</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:59:58.562Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.RosImageEventOperation")
public class RosImageEventOperation extends com.aliyun.ros.cdk.core.RosResource {

    protected RosImageEventOperation(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosImageEventOperation(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.threatdetection.RosImageEventOperation.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosImageEventOperation(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.RosImageEventOperationProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConditions() {
        return software.amazon.jsii.Kernel.get(this, "attrConditions", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEventKey() {
        return software.amazon.jsii.Kernel.get(this, "attrEventKey", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEventName() {
        return software.amazon.jsii.Kernel.get(this, "attrEventName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEventType() {
        return software.amazon.jsii.Kernel.get(this, "attrEventType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrImageEventOperationId() {
        return software.amazon.jsii.Kernel.get(this, "attrImageEventOperationId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNote() {
        return software.amazon.jsii.Kernel.get(this, "attrNote", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOperationCode() {
        return software.amazon.jsii.Kernel.get(this, "attrOperationCode", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScenarios() {
        return software.amazon.jsii.Kernel.get(this, "attrScenarios", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSource() {
        return software.amazon.jsii.Kernel.get(this, "attrSource", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getConditions() {
        return software.amazon.jsii.Kernel.get(this, "conditions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setConditions(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "conditions", java.util.Objects.requireNonNull(value, "conditions is required"));
    }

    /**
     */
    public void setConditions(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "conditions", java.util.Objects.requireNonNull(value, "conditions is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getEventType() {
        return software.amazon.jsii.Kernel.get(this, "eventType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEventType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "eventType", java.util.Objects.requireNonNull(value, "eventType is required"));
    }

    /**
     */
    public void setEventType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "eventType", java.util.Objects.requireNonNull(value, "eventType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getOperationCode() {
        return software.amazon.jsii.Kernel.get(this, "operationCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOperationCode(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "operationCode", java.util.Objects.requireNonNull(value, "operationCode is required"));
    }

    /**
     */
    public void setOperationCode(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "operationCode", java.util.Objects.requireNonNull(value, "operationCode is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEventKey() {
        return software.amazon.jsii.Kernel.get(this, "eventKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEventKey(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "eventKey", value);
    }

    /**
     */
    public void setEventKey(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "eventKey", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEventName() {
        return software.amazon.jsii.Kernel.get(this, "eventName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEventName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "eventName", value);
    }

    /**
     */
    public void setEventName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "eventName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNote() {
        return software.amazon.jsii.Kernel.get(this, "note", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNote(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "note", value);
    }

    /**
     */
    public void setNote(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "note", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getScenarios() {
        return software.amazon.jsii.Kernel.get(this, "scenarios", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setScenarios(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "scenarios", value);
    }

    /**
     */
    public void setScenarios(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "scenarios", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSource() {
        return software.amazon.jsii.Kernel.get(this, "source", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSource(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "source", value);
    }

    /**
     */
    public void setSource(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "source", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.threatdetection.RosImageEventOperation}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.threatdetection.RosImageEventOperation> {
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
        private final com.aliyun.ros.cdk.threatdetection.RosImageEventOperationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.threatdetection.RosImageEventOperationProps.Builder();
        }

        /**
         * @return {@code this}
         * @param conditions This parameter is required.
         */
        public Builder conditions(final com.aliyun.ros.cdk.core.IResolvable conditions) {
            this.props.conditions(conditions);
            return this;
        }
        /**
         * @return {@code this}
         * @param conditions This parameter is required.
         */
        public Builder conditions(final java.util.Map<java.lang.String, ? extends java.lang.Object> conditions) {
            this.props.conditions(conditions);
            return this;
        }

        /**
         * @return {@code this}
         * @param eventType This parameter is required.
         */
        public Builder eventType(final java.lang.String eventType) {
            this.props.eventType(eventType);
            return this;
        }
        /**
         * @return {@code this}
         * @param eventType This parameter is required.
         */
        public Builder eventType(final com.aliyun.ros.cdk.core.IResolvable eventType) {
            this.props.eventType(eventType);
            return this;
        }

        /**
         * @return {@code this}
         * @param operationCode This parameter is required.
         */
        public Builder operationCode(final java.lang.String operationCode) {
            this.props.operationCode(operationCode);
            return this;
        }
        /**
         * @return {@code this}
         * @param operationCode This parameter is required.
         */
        public Builder operationCode(final com.aliyun.ros.cdk.core.IResolvable operationCode) {
            this.props.operationCode(operationCode);
            return this;
        }

        /**
         * @return {@code this}
         * @param eventKey This parameter is required.
         */
        public Builder eventKey(final java.lang.String eventKey) {
            this.props.eventKey(eventKey);
            return this;
        }
        /**
         * @return {@code this}
         * @param eventKey This parameter is required.
         */
        public Builder eventKey(final com.aliyun.ros.cdk.core.IResolvable eventKey) {
            this.props.eventKey(eventKey);
            return this;
        }

        /**
         * @return {@code this}
         * @param eventName This parameter is required.
         */
        public Builder eventName(final java.lang.String eventName) {
            this.props.eventName(eventName);
            return this;
        }
        /**
         * @return {@code this}
         * @param eventName This parameter is required.
         */
        public Builder eventName(final com.aliyun.ros.cdk.core.IResolvable eventName) {
            this.props.eventName(eventName);
            return this;
        }

        /**
         * @return {@code this}
         * @param note This parameter is required.
         */
        public Builder note(final java.lang.String note) {
            this.props.note(note);
            return this;
        }
        /**
         * @return {@code this}
         * @param note This parameter is required.
         */
        public Builder note(final com.aliyun.ros.cdk.core.IResolvable note) {
            this.props.note(note);
            return this;
        }

        /**
         * @return {@code this}
         * @param scenarios This parameter is required.
         */
        public Builder scenarios(final com.aliyun.ros.cdk.core.IResolvable scenarios) {
            this.props.scenarios(scenarios);
            return this;
        }
        /**
         * @return {@code this}
         * @param scenarios This parameter is required.
         */
        public Builder scenarios(final java.util.Map<java.lang.String, ? extends java.lang.Object> scenarios) {
            this.props.scenarios(scenarios);
            return this;
        }

        /**
         * @return {@code this}
         * @param source This parameter is required.
         */
        public Builder source(final java.lang.String source) {
            this.props.source(source);
            return this;
        }
        /**
         * @return {@code this}
         * @param source This parameter is required.
         */
        public Builder source(final com.aliyun.ros.cdk.core.IResolvable source) {
            this.props.source(source);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.threatdetection.RosImageEventOperation}.
         */
        @Override
        public com.aliyun.ros.cdk.threatdetection.RosImageEventOperation build() {
            return new com.aliyun.ros.cdk.threatdetection.RosImageEventOperation(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
