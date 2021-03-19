import React from 'react'
import {
    Row,
    Col
} from 'reactstrap';
export default function Form() {
    return (
        <div className="ml-2">
            <Row>
                <Col md="auto">
                    <Row className="mb-1">
                        <Col style={{maxWidth: '100px'}} className="d-flex align-items-start">Title</Col>
                        <Col md="auto" className="d-flex align-items-start"><input /></Col>
                    </Row>
                    <Row>
                        <Col style={{maxWidth: '100px'}} className="d-flex align-items-start">Description</Col>
                        <Col md="auto" className="d-flex align-items-start"><input /></Col>
                    </Row>
                </Col>
                <Col className="d-flex align-items-center justify-content-start">
                    <button>Save</button>
                </Col>
            </Row>
        </div>
    )
}
